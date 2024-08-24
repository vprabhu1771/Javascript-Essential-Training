window.onload = function()
{
    console.log("Document loaded");

    const name = document.getElementById('name');

    const result1 = document.getElementById('result1');

    const result2 = document.getElementById('result2');
    
    const lowercase_process = document.getElementById('lowercase_process');

    lowercase_process.addEventListener('click', function(){

        result1.value = name.value.toLowerCase();

        result2.innerText = name.value.toLowerCase();

    });


}