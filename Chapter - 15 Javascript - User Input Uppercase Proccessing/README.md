# Chapter - 15 Javascript - User Input Uppercase Proccessing
 
1. `index.html`

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
    
    <input type="text" id="name" placeholder="enter your name">

    <br>
    <br>

    <input type="text" id="result1">

    <br>

    <p id="result2"></p>

    <br>

    <input type="button" value="Uppercase" id="uppercase_process">
    
</body>
</html>
```

2. `main.js`

```
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
```

![Image](3.PNG)

![Image](4.PNG)

![Image](5.PNG)