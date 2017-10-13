#define theRedLed 13

void setup() {
  pinMode(theRedLed,OUTPUT);
  
}

void loop() {
  digitalWrite(9,LOW);
  digitalWrite(theRedLed,HIGH);
  delay(1000);
    digitalWrite(theRedLed,LOW);
  delay(1000);
}
