x = 0
y = 0

screen_width = 0;
screen_height = 0;

draw_apple = "";

apple = "";
speak_data = "";
to_number = 0;


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("status").innerHTML = "All systems are functional. You may proceed with your fruitful commands.";
    recognition.start();
}

recognition.onresult = function(event)
{
        console.log(event);

     var content = event.results[0][0].transcript;
     document.getElementById("status").innerHTML = "Your command has been heard. Getting to work now! Drawing  " + content;
     to_number = Number(content);
     if(Number.isInteger(to_number))
     {
        document.getElementById("status"),innerHTML = "Started Drawing Apple(s)!"
        draw_apple = "set";
     }
     else
     {
        document.getElementById("status").innerHTML = ("Sorry, the sppech has not recognized a number! Please try again.")
     }
     if(content =="apple")
        {
            x = Math.floor(Math.random() * 800);
            y = Math.floor(Math.random() * 500);
            document.getElementById("status").innerHTML = "Drawing Apple(s)...";
            draw_apple = "set";
        }


       
}

function setup()
    {
        screen_width = window.innerWidth - 300;
        screen_height = window.innerHeight - 300;
        canvas = createCanvas(screen_width, screen_height-150);
        canvas.position(0, 300);
    }

function draw() 
    {
        if(draw_apple == "set")
            {
           for(var i = 1; i <= to_number; i++)
           {
            x = Math.floor(Math.random() * 500);
            y = Math.floor(Math.random() * 300 );
            Image(apple, x, y, 50, 50);
           }
           document.getElementById("status").innerHTML = "The Apple(s) Have Been Drawn!";
           speak_data = to_number + "Apple(s) drawn!";
           speak()
           draw_apple = "";
            }
    }


function speak()
{
    var synth = window.SpeechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}