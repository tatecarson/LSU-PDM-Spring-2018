// Adapted from circuits.io user prabh mystry (https://circuits.io/circuits/1896273-morse)

String message = "SOS"; // test string
int timeUnit = 500;     // time units for morse
bool messageDisplayed = false;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  message.toLowerCase();
  //speed
  Serial.begin(9600);
  Serial.println(message);
}

void loop()
{
  delay(timeUnit * 7);
  for (int i = 0; i < message.length() && !messageDisplayed; i++)
  {

    if (i == message.length() - 1)
    {
      messageDisplayed = true;
    }

    switch (message.charAt(i))
    {
    case 'a':
      dot();
      dash();
      break;
    case 'b':
      dash();
      dot();
      dot();
      dot();
      break;
    case 'c':
      dash();
      dot();
      dash();
      break;
    case 'd':
      dash();
      dot();
      dot();
      break;
    case 'e':
      dot();
      break;
    case 'f':
      dot();
      dot();
      dash();
      dot();
      break;
    case 'g':
      dash();
      dash();
      dot();
      break;
    case 'h':
      dot();
      dot();
      dot();
      dot();
      break;
    case 'i':
      dot();
      dot();
      break;
    case 'j':
      dot();
      dash();
      dash();
      dash();
      break;
    case 'k':
      dash();
      dot();
      dash();
      break;
    case 'l':
      dot();
      dash();
      dot();
      dot();
      break;
    case 'm':
      dash();
      dash();
      break;
    case 'n':
      dash();
      dot();
      break;
    case 'o':
      dash();
      dash();
      dash();
      break;
    case 'p':
      dot();
      dash();
      dash();
      dot();
      break;
    case 'q':
      dash();
      dash();
      dot();
      dash();
      break;
    case 'r':
      dot();
      dash();
      dot();
      break;
    case 's':
      dot();
      dot();
      dot();
      break;
    case 't':
      dash();
      break;
    case 'u':
      dot();
      dot();
      dash();
      break;
    case 'v':
      dot();
      dot();
      dot();
      dash();
      break;
    case 'w':
      dot();
      dash();
      dash();
      break;
    case 'x':
      dash();
      dot();
      dot();
      dash();
      break;
    case 'y':
      dash();
      dot();
      dash();
      dash();
      break;
    case 'z':
      dash();
      dash();
      dot();
      dot();
      break;
    case '1':
      dot();
      dash();
      dash();
      dash();
      dash();
      break;
    case '2':
      dot();
      dot();
      dash();
      dash();
      dash();
      break;
    case '3':
      dot();
      dot();
      dot();
      dash();
      dash();
      break;
    case '4':
      dot();
      dot();
      dot();
      dot();
      dash();
      break;
    case '5':
      dot();
      dot();
      dot();
      dot();
      dot();
      break;
    case '6':
      dash();
      dot();
      dot();
      dot();
      dot();
      break;
    case '7':
      dash();
      dash();
      dot();
      dot();
      dot();
      break;
    case '8':
      dash();
      dash();
      dash();
      dot();
      dot();
      break;
    case '9':
      dash();
      dash();
      dash();
      dash();
      dot();
      break;
    case '0':
      dash();
      dash();
      dash();
      dash();
      dash();
      break;
    case ' ':
      delay(timeUnit * 4);
      break;
    }
    delay(timeUnit * 2);
  }
}

void dot()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(timeUnit);
  digitalWrite(LED_BUILTIN, LOW);
  delay(timeUnit);
}

void dash()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(timeUnit * 3);
  digitalWrite(LED_BUILTIN, LOW);
  delay(timeUnit);
}
