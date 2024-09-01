window.onload = function()
{
    console.log("Document loaded");

    const name = document.getElementById('name');

    const result1 = document.getElementById('result1');

    const result2 = document.getElementById('result2');
    
    const uppercase_process = document.getElementById('uppercase_process');

    uppercase_process.addEventListener('click', function(){

        result1.value = name.value.toUpperCase();

        result2.innerText = name.value.toUpperCase();
    });


}