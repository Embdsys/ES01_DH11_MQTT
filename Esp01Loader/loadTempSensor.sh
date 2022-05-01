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

#xdotool key ctrl+shift+t
arduino ./DHT11_MQtt_ESP01/DHT11_MQtt_ESP01.ino
#xdotool key ctrl+shift+t
bash runBinary.sh
# Make .ino into .bin
#WID=`xdotool search --name "arduino" | head -1`
#xdotool selectwindow
# Make the fucker click on the screen to select it
# left half screen x:416 y:445 screen:0 window:37748780
# wait to let arduino IDE load
#sleep 120
#xdotool mousemove 416 445 click 1
#xdotool keydown ctrl+alt+s
#xdotool keyup ctrl+alt+s

echo "stage1 completed!!"
