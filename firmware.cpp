#include "SparkButton/SparkButton.h"

SparkButton b = SparkButton();

// This routine runs only once upon reset
void setup()
{
    b.begin();
    Spark.function("blink", blink);
    Spark.function("alarm", alarm);


}

void loop()
{
   
}

int blink(String command)
{
b.allLedsOn(0,255,255);
delay(100);
b.allLedsOff();
return 1;
}

int alarm(String command)
{
b.allLedsOn(255,0,0);
delay(100);
b.allLedsOff();
return 1;
}
