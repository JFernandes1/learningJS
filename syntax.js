//Fixed values = LITERALS
//Variable values =   VARIABLES
var x;
x = 6;

//tells browser  to write it inside a HTML element
//with id = demo

document.getElementById("demo").innerHTML = "Hello Dolly.";
<html>
    <body>

        <p id="demo">Display the result here.</p> 

        <script>
            var number = 50;
            document.getElementById("demo").innerHTML = number;
        </script>

    </body>
</html>
