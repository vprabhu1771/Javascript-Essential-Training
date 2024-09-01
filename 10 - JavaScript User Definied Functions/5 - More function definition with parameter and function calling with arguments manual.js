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