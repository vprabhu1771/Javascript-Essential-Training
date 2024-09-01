# 10 - JavaScript User Definied Functions

`index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"></script>
</head>
<body>
    
</body>
</html>
```

1. **Simple Function Definition**

`main.js`

```
window.onload = function()
{
    // step 2 function calling
    good_morning();

    good_morning();
    good_morning();
    good_morning();
}   

// step 1 function definition
function good_morning()
{
    console.log("Good Morning");
}
```

2. **More Function Definition**

`main.js`

```
window.onload = function()
{
    // step 2 function calling
    good_morning();
    good_afternoon();
    good_evening();
    good_night();
}   

// step 1 function definition
function good_morning()
{
    console.log("Good Morning");
}

function good_afternoon()
{
    console.log("Good Afternoon");
}

function good_evening()
{
    console.log("Good Evening");
}

function good_night()
{
    console.log("Good Night");
}
```

3. **Function Calling or Function invoke using switch case**

`main.js`

```
window.onload = function()
{
    var options = 4;

    switch (options) {
        case 1:
            good_morning();
            break;
    
        case 2:
            good_afternoon();
            break;

        case 3:
            good_evening();
            break;
    
        case 4:
            good_night();
            break;

        default:
            console.log("Invaild Option");
            break;
    }
}   

// step 1 function definition
function good_morning()
{
    console.log("Good Morning");
}

function good_afternoon()
{
    console.log("Good Afternoon");
}

function good_evening()
{
    console.log("Good Evening");
}

function good_night()
{
    console.log("Good Night");
}
```

4. **Function Definition with Parameter and Function Calling with arguments manual**

`main.js`

```
window.onload = function()
{
    // step 2 function calling with arguments manual
    addition(2,3)

    
}   

// step 1 function definition with parameter
function addition(x,y) {
    console.log("x = " + x + " y = " + y);

    console.log(x+y);
}
```

5. **More function definition with parameter and function calling with arguments manual**

`main.js`

```
window.onload = function()
{
    // step 2 function calling with arguments manual
    addition(5,3)

    subtraction(5,3) 

    multiplication(5,3)

    division(7,3)

    modulus(7,3);
}   

// step 1 function definition with parameter
function addition(x,y) {
    console.log("x = " + x + " y = " + y);

    console.log("Addition");

    console.log(x+y);
}

function subtraction(x,y) {
    console.log("x = " + x + " y = " + y);

    console.log("Subtraction");
    
    console.log(x-y);
}

function multiplication(x,y) {
    console.log("x = " + x + " y = " + y);

    console.log("Multiplication");
    
    console.log(x*y);
}

function division(x,y) {
    console.log("x = " + x + " y = " + y);

    console.log("Division");
    
    console.log(x/y);
}

function modulus(x,y) {
    console.log("x = " + x + " y = " + y);

    console.log("Modulus");
    
    console.log(x%y);
}
```

6. **Javascript Functions with return statement**

`main.js`

```
window.onload = function()
{
    var a = 1, b = 2;

    // step 2 function calling with arguments auto
    display_value(a,b);

    display_msg("Minimum Value")

    display_msg(min(a,b));
 
    display_msg("Maximum Value")

    display_msg(max(a,b));
}   

// step 1 function definition with parameter
function min(x,y)
{
    if(x < y)
        return x;
    else
        return y;
}

function max(x,y)
{
    if(x > y)
        return x;
    else
        return y;
}

function display_value(x,y)
{
    console.log("x = " + x + " y = " + y);
}


function display_msg(msg) {
    console.log(msg);
}
```