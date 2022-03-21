#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>
#include <WiFiUdp.h>
#include <NTPClient.h>

#define DHTPIN 2     // Digital pin connected to the DHT sensor

// Uncomment the type of sensor in use:
#define DHTTYPE    DHT11     // DHT 11
//#define DHTTYPE    DHT22     // DHT 22 (AM2302)
//#define DHTTYPE    DHT21     // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

// current temperature & humidity, updated in loop()
float t = 0.0;
float h = 0.0;

WiFiUDP ntpUDP;

// By default 'pool.ntp.org' is used with 60 seconds update interval and
// no offset
NTPClient timeClient(ntpUDP);

// Update these with values suitable for your network.
const char* ssid = "107E1C";  ///////////// your ssid.
const char* password = "J2C26C2B76556";  ///////////// Your passwd.
const char* mqtt_server = "192.168.0.77";     /// IP from your MQTT  Brokerchar auth[] = BLYNK_AUTH_TOKEN;

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE	(50)
char msg[MSG_BUFFER_SIZE];
//float msg;
int value = 0;

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
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
}

float readTemp(){  
    float newT = dht.readTemperature();
    return newT;
  }

float readHum(){
  float newH = dht.readHumidity();
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
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("outTopic", "hello world");
      // ... and resubscribe
      client.subscribe("inTopic");
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
}

void loop() {
  timeClient.update();
  String ID = ":Temperature:";
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  unsigned long now = millis();
  if (now - lastMsg > 2000) {
    lastMsg = now;
    float tempValue = readTemp();
    float humValue = readHum();
    Serial.println(tempValue);
    Serial.println(humValue);
    //Gettime
    snprintf (msg, MSG_BUFFER_SIZE, "%c : %lf : %lf",timeClient.getFormattedTime(), tempValue, humValue); //Here you write the message to publish
    Serial.print("Publish message: ");
    Serial.println(msg);
    client.publish("outTopic",msg);
  }
}
