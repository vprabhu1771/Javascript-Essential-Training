# 11 - Array

1. **Array Introduction**

Arrays are composite types that store ordered lists of data.

arrays may be declared using the `Array()` constructor or .

```
// creates an empty array
var odd_number = new Array(); 

console.log(odd_number);
```

```
output
[]
```

arrays may be declared using an array literal.

```
// creates an empty array
var odd_number = [];

console.log(odd_number);
```

```
output
[]
```

array initialization using `Array()` constructor

```
var odd_number = new Array(1,3,5,7,9);

console.log(odd_number);
```

```
output
[ 1, 3, 5, 7, 9 ]
```

array initialization using an array literal.

```
var odd_number = [1,3,5,7,9];

console.log(odd_number);
```

```
output
[ 1, 3, 5, 7, 9 ]
```

javascript arrays can grow and shrik.


2. **Accessing Array Elements**

accessing the elements of an array is done using the array name with square brackets and a value.

```
var odd_number = new Array(1,3,5,7,9);

console.log(odd_number[0]);
```

In every programming languages array `index` begin with `zero`, 
to access first element of array using the array name with square brackets add `zero` inside square brackets.

```
odd_number[0]
```

Note:
you need to be careful when accessing an element of an array using index.

if array index not available on range . javascript return `undefined` value.

```
console.log(odd_number[19]);
```

```
output
undefined
```

3. **Creating Empty Array**

```
window.onload = function ()
{
    var data = new Array();

    console.log(data);
}
```

```
Output
Array []
```

4. **Array Initalization**

```
window.onload = function ()
{
    var rgb = new Array(“RED”,”GREEN”,”BLUE”);

    var cmyk = new Array(“CYAN”,”MAGENTA”,”YELLOW”,”BLACK”);

    console.log(rgb);

    console.log(cmyk);
}
```

```
Output
Array(3) [ “RED”, “GREEN”, “BLUE” ]
Array(4) [ “CYAN”, “MAGENTA”, “YELLOW”, “BLACK” ]
```

5. **Display Array Value using Slice Operator**

```
window.onload = function ()
{
    var rgb = new Array(“RED”,”GREEN”,”BLUE”);

    console.log(rgb[0]);

    console.log(rgb[1]);

    console.log(rgb[2]);
}
```

```
Output
RED
GREEN
BLUE
```