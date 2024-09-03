window.onload = function()
{
    console.log("Document loaded");

    var x = document.getElementById('x');

    var y = document.getElementById('y');

    var result1 = document.getElementById('result1');

    var result2 = document.getElementById('result2');

    // addition logic

    var addition_button = document.getElementById('addition_button');

    addition_button.addEventListener('click', function(){
             
        result1.value = parseInt(x.value) + parseInt(y.value);
        
        result2.innerText = parseInt(x.value) + parseInt(y.value);

    });

    // subtraction logic

    var subtraction_button = document.getElementById('subtraction_button');

    subtraction_button.addEventListener('click', function(){
             
        result1.value = parseInt(x.value) - parseInt(y.value);
        
        result2.innerText = parseInt(x.value) - parseInt(y.value);
        
    });
    

    // multiplication logic

    var multiplication_button = document.getElementById('multiplication_button');

    multiplication_button.addEventListener('click', function(){
             
        result1.value = parseInt(x.value) * parseInt(y.value);
        
        result2.innerText = parseInt(x.value) * parseInt(y.value);
        
    });
    

    // division logic

    var division_button = document.getElementById('division_button');

    division_button.addEventListener('click', function(){
             
        result1.value = parseInt(x.value) / parseInt(y.value);
        
        result2.innerText = parseInt(x.value) / parseInt(y.value);
        
    });
    
    // modulus logic

    var modulus_button = document.getElementById('modulus_button');

    modulus_button.addEventListener('click', function(){
             
        result1.value = parseInt(x.value) % parseInt(y.value);
        
        result2.innerText = parseInt(x.value) % parseInt(y.value);
        
    });
}