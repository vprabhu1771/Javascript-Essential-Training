window.onload = function()
{
    console.log("Document loaded");

    var x = document.getElementById('x');

    var y = document.getElementById('y');

    var result1 = document.getElementById('result1');

    var result2 = document.getElementById('result2');

    const process = document.getElementById('process');

    process.addEventListener('click', function(){
        
        result1.value = parseInt(x.value) + parseInt(y.value);

        result2.innerText = parseInt(x.value) + parseInt(y.value);
    });
}