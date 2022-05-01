 #!/bin/bash

#This file is used to load Temperature sensor firmware in an orderly manner

# Get a fresh copy of original code
cp ../DHT11_MQtt_ESP01.ino ./DHT11_MQtt_ESP01 

# Replace ssid
read -p "Enter your ssid : " auxVar
echo $auxVar
var1='s/$ssid/'$auxVar'/g'
sed -i $var1 ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

# Replace wifiPassword
read -p "Enter your wifiPassword : " auxVar
echo $auxVar
var1='s/$wifiPassword/'$auxVar'/g'
sed -i $var1 ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

# Replace mqttServerIp
read -p "Enter your mqttServerIp : " auxVar
echo $auxVar
var1='s/$mqttServerIp/'$auxVar'/g'
sed -i $var1 ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

# Replace  inTopic
read -p "Enter your inTopic : " auxVar
echo $auxVar
var1='s/$inTopic/'$auxVar'/g'
sed -i $var1 ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

# Replace outTopic
read -p "Enter your outTopic : " auxVar
echo $auxVar
var1='s/$outTopic/'$auxVar'/g'
sed -i $var1 ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

echo "Done updating file!!"

cat ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

echo "Open ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino and make bind file"
read -p "Press key to continue.. " -n1 -s

#esptool --port /dev/ttyUSB0 write_flash 0x1000 DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino.nodemcu.bin 
echo "Done loading"
