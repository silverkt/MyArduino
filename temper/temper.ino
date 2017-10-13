float temp = 0;
int val = 0;

void setup() 

{ 

  Serial.begin(9600); // 打开串口，设置波特率为9600 bps

}

void loop() 

{

      int val;

      val=analogRead(5);//传感器接到模拟口5，数值根据自己的需要可变
      
      temp = val * 0.48876;
      Serial.print("temp is ");
      Serial.print(temp);      
      Serial.println(" C");//从串口发送字符串并换行         

      delay(800);

}
