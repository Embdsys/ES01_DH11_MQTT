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

arduino ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino

# Make .ino into .bin
xte 'sleep 30' 'keydown Control_L' 'keydown Alt_L' 'keydown s' 'keyup Control_L' 'keyup Alt_L' 'keyup s' 

# Close arduino IDE
xte 'sleep 30' 'keydown Control_L' 'keydown c' 'keyup Control_L' 'keyup c'

