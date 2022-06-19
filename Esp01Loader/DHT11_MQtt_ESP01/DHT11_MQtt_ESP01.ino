#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

#define DHTPIN 13     // Digital pin connected to the DHT sensor
// Bash variables to set on cmd / terminal

//107E1C
//J2C26C2B76556
//192.168.0.231
//inTopic2
//esp8266

// Uncomment the type of sensor in use:
#define DHTTYPE    DHT11     // DHT 11
//#define DHTTYPE    DHT22     // DHT 22 (AM2302)
//#define DHTTYPE    DHT21     // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

// current temperature & humidity, updated in loop()
float t = 0.0;
float h = 0.0;
int counter = 0;



WiFiUDP ntpUDP;

// By default 'pool.ntp.org' is used with 60 seconds update interval and
// no offset
NTPClient timeClient(ntpUDP);
// Update these with values suitable for your network.
const char* ssid = "107E1C"; //"107E1C";  // 107E1C
const char* password = "J2C26C2B76556";//"J2C26C2B76556";  // J2C26C2B76556
const char* mqtt_server = "192.168.0.231";//"192.168.0.231"; // 192.168.0.231

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE	(50)
char msg[MSG_BUFFER_SIZE];
//float msg;
int value = 0;

void setup_wifi() {
  //delay(1);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.persistent(false);     // <-- prevents flash wearing?
  WiFi.forceSleepWake();      // <-- WITHOUT THIS ESP CONNECTS ONLY AFTER FIRST FEW RESTARTS OR DOESN'T CONNECT AT ALL
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  dht.begin(); //Start reading temps
  delay(500);
}

int readTemp(){  
    int newT = dht.readTemperature();
    return newT;
  }

int readHum(){
  int newH = dht.readHumidity();
  return newH;
  }

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived");
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP8266Client- Temp1";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      //client.publish("outTopic", "hello world");
      // ... and resubscribe
      client.subscribe("inTopic2"); //Subsribe to a topic here inTopic2
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  timeClient.begin();   
  delay(500);
}

void loop() {
  timeClient.update();
  String ID = ":Temperature:";
  if (!client.connected()) {
    reconnect();
    delay(500);
  }
  client.loop();
  unsigned long now = millis();
  if (now - lastMsg > 6000) {
    //Serial.print("Sanity check");
    lastMsg = now;
    while (isnan(readTemp() || readTemp()>100)){
     delay(2);
      }
      
    int tempValue = readTemp();
    int humValue = readHum();
    delay (1000);
    //Serial.print("Sanity check");
    //Serial.println(tempValue);
    int tempo = millis(); 
    //Gettime
    snprintf (msg, MSG_BUFFER_SIZE, "%i : %i : %i",counter, tempValue, humValue); //Here you write the message to publish
    client.publish("esp8266",msg); // Here is out topic esp8266
    counter++;
    delay(1000);
    //if (counter > 3){
    ESP.deepSleep(20e6); 
    //} 
  }
}
