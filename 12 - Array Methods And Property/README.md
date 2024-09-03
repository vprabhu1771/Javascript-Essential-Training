# 12 - Array Methods And Property

1. **Length**

The Javascript array length property returns or sets the number of 
elements in an array.

```
window.onload = function ()
{
    var rgb = new Array(“RED”,”GREEN”,”BLUE”);

   console.log(rgb.length);
}
```

```
Output
3
```

2. **Reverse**

The Javascript array reverse method returns the array in reverse order.

```
window.onload = function ()
{
    var rgb = new Array(“RED”,”GREEN”,”BLUE”);

   console.log(“Original Order”);

   console.log(rgb);

   console.log(“Reverse Order”);

    rgb.reverse();

   console.log(rgb);
}
```

```
Output

Original Order

Array(3) [ “RED”, “GREEN”, “BLUE” ]

Reverse Order

Array(3) [ “BLUE”, “GREEN”, “RED” ]
```

3. **Sort**

The Javascript array sort method sorts the items of an array.

```
window.onload = function ()
{
    var alphabets = new Array(“d”,”c”,”b”,”a”);

    console.log(“Original Order”);

    console.log(alphabets);

    console.log(“Sort Order”);

    alphabets.sort();

    console.log(alphabets);
}
```

```
Output

Original Order

Array(4) [ “d”, “c”, “b”, “a” ]

Sort Order

Array(4) [ “a”, “b”, “c”, “d” ]
```

4. **Fill**

The Javascript array Fill method Returns an Array by filling all elements with a static value.

```
window.onload = function ()
{
    var numbers = new Array(3);

    console.log(“Before Fill”);

    console.log(numbers);

    console.log(“After Fill”);

    numbers.fill(22);

    console.log(numbers);
}
```

```
Output

Before Fill

Array(3) [ <3 empty slots> ]

After Fill

Array(3) [ 22, 22, 22 ]
```

5. **Join**

The Javascript array join method Returns a new string by 
concatenating all of the elements in an array.

```
window.onload = function ()
{
    var alphabets = new Array(“a”,”b”, “c”, “d”);

    var output;

    console.log(“Before Join”);

    console.log(alphabets);

    console.log(“After Join”);

    output = alphabets.join();

    console.log(output);

    console.log(“Remove Comma sepration”);

    output = alphabets.join(“”);

    console.log(output);

    console.log(“Remove Comma sepration and Add Custom sepration”);

    output = alphabets.join(“-”);

    console.log(output);

}
```

```
Output

Before Join

Array(4) [ “a”, “b”, “c”, “d” ]

After Join

a,b,c,d

Remove Comma sepration

abcd

Remove Comma sepration and Add Custom sepration

a-b-c-d
```

6. **toString**

The Javascript array toString method Returns a string representing the specified array and its elements.

```
window.onload = function ()
{
    var alphabets = new Array(“a”, “b”, “c”, “d”);

    var output;

    console.log(“Before toString”);

    console.log(alphabets);

    console.log(“After toString”);

    output = alphabets.toString();

    console.log(output);
      
}
```

```
Output

Before toString

Array(4) [ “a”, “b”, “c”, “d” ]

After toString

a,b,c,d
```

7. **pop**

The Javascript array pop method removes the last element from an array and returns that element.

```
window.onload = function ()
{
    var rgb = new Array(“Red”, “Green”, “Blue”);

    console.log(“Before Pop”);

    console.log(rgb);

    console.log(“After Pop”);

    rgb.pop();

    console.log(rgb);

    console.log(“pop return that removed element”);

    console.log(rgb.pop());
}
```

```
Output

Before Pop

Array(3) [ “Red”, “Green”, “Blue” ]

After Pop

Array [ “Red”, “Green” ]

pop return that removed element

Green
```

8. **shift**

The Javascript array shift method removes the first element from an array and returns that element.

```
window.onload = function ()
{
    var rgb = new Array(“Red”, “Green”, “Blue”);

    console.log(“Before Shift”);

    console.log(rgb);

    console.log(“After Shift”);

    rgb.shift();

    console.log(rgb);

    console.log(“Shift return that removed element”);

    console.log(rgb.shift());
}
```

```
Output

Before Shift

Array(3) [ “Red”, “Green”, “Blue” ]

After Shift

Array [ “Green”, “Blue” ]

Shift return that removed element 

Green
```

9. **push**

The Javascript array push method adds zero or more elements to the
end of an array and returns the new length of the array.

```
window.onload = function ()
{
    var rgb = new Array();

    console.log(“add single element”);

    rgb.push(‘RED’);

    console.log(rgb);

    console.log(“Add Multiple Elements”);

    rgb.push(“GREEN”,”BLUE”);

    console.log(rgb);
}
```

```
Output

add single element

Array [ “RED” ]

Add Multiple Elements

Array(3) [ “RED”, “GREEN”, “BLUE” ]
```

10. **unshift**

The Javascript array unshift method adds zero or more elements to the beginning of an array and returns the new length of the array.

```
window.onload = function ()
{
    var rgb = new Array();

    console.log(“add single element”);

    rgb.unshift(‘RED’);

    console.log(rgb);

    console.log(“Add Multiple Elements”);

    rgb.unshift(“GREEN”,”BLUE”);

    console.log(rgb);
}
```

```
Output

add single element

Array [ “RED” ]

Add Multiple Elements

Array(3) [ “GREEN”, “BLUE”, “RED” ]
```

11. **concat**

The Javascript array concat method returns a new array by merging two or more values / arrays.

```
window.onload = function ()
{
    var rgb = new Array(“RED”,”GREEN”, “BLUE”);

    var cmyk = new Array(“CYAN”, “MAGENTA”, “YELLOW”, “BLACK”);

    var colors = rgb.concat(cmyk);

    console.log(colors);

    var colors = cmyk.concat(rgb);

    console.log(colors);
}
```

```
Output

Array(7) [ “RED”, “GREEN”, “BLUE”, “CYAN”, “MAGENTA”, “YELLOW”, “BLACK” ]

Array(7) [ “CYAN”, “MAGENTA”, “YELLOW”, “BLACK”, “RED”, “GREEN”, “BLUE” ]
```

12. **splice**

The Javascript Array splice method returns an array by changing (adding / removing) it’s elements in place.

syntax:

array.splice(start, deletecount, item1,....itemN)

parameters:

start -> the index from where the array is changed.

deletecount -> (optional) the number of items to remove from start.

item1, .... itemN -> (optional) the elements to add to the start index. if not specified splice will only remove elements from the array.

```
window.onload = function ()
{
    var rgb = new Array(“WHITE”, “YELLOW”, “BLUE”);
    
    console.log(“Before Splice”);
    
    console.log(rgb);

    console.log(“After Splice”);
    
    rgb.splice(0,2, “RED”, “GREEN”);
    
    console.log(rgb);

}
```

```
output

Before Splice index.js:5:13

Array(3) [ “WHITE”, “YELLOW”, “BLUE” ]

After Splice

Array(3) [ “RED”, “GREEN”, “BLUE” ]
```

13. **indexof**

The Javascript array indexof method returns the first index of 
occurance of an array element.

```
window.onload = function ()
{
    var rgb = new Array(“RED”, “YELLOW”, “BLUE”, “RED”);

    console.log(rgb.indexOf(“RED”));

}
```

```
output
0
```

14. **lastindexof**

The javascript array lastindexof method returns the last index at
which a given element can be found in the array.

```
window.onload = function ()
{
    var rgb = new Array(“RED”, “YELLOW”, “BLUE”, “RED”);

    console.log(rgb.lastIndexOf(“RED”));

}
```

```
output
3
```

15. **of**

The Javascript Array of method creates a new Array instance from the given arguments.

```
window.onload = function ()
{
    var rgb = Array.of(“RED”, “YELLOW”, “BLUE”, “RED”);

    console.log(rgb);

}
```

```
Ouput
Array(4) [ “RED”, “YELLOW”, “BLUE”, “RED” ]
```

16. **slice**

The Javascript array slice method returns a shallow copy of a 
portion of an array into a new array object.

syntax:
```
array.slice(start, end)
```

parameters:

`start` -> (optional) starting `index` of the selection if not 
provided, the selection starts at start `0`

`end` -> (optional) ending `index` of the selection(exclusive).
if not provided the selection ends at the `index` of the last element.

```
window.onload = function ()
{
    var colors = [“RED”, “GREEN”, “BLUE”, “CYAN”, “MAGENTA”, “YELLOW”, “BLACK”];

    var rgb = colors.slice(0,3);

    var cmyk = colors.slice(3,7);

    console.log(“RGB : “ + rgb);

    console.log(“CMYK : “ + cmyk);
}
```

```
Output
RGB : RED,GREEN,BLUE

CMYK : CYAN,MAGENTA,YELLOW,BLACK
```

17. **firstindex**

The Javascript array firstindex method returns the index of the first array element. that staisfies the provided test function or else returns -1.

parameters:

`callback` -> function to execute on each element of the array. it takes in:

	element - the current element of array.

`thisArg` -> (optional) object to use as this inside callback.



return:

returns -> the `index` of the first element in the array that 
staisfies the given function.

returns ->  `-1` if none of the element staisfies the function

```
window.onload = function ()
{
    const team = [
        { name : ‘bill’, age : 10},
        { name : ‘linus’, age : 15},
        { name : ‘alex’, age : 20},
        { name : ‘stev’, age : 34},
    ];

    function isAdult(member)
    {
        return member.age >= 18;
    }

    var result = team[team.findIndex(isAdult)];

    console.log(result);
}
```

```
Output
Object { name: “alex”, age: 20 }
```

18. **find**

The javascript arrray find method returns the value of the first 
array element that satisfies the provided test function

parameters:

callback -> function to execute on each element of the array. it takes in:

	element - the current element of array.

thisArg -> (optional) object to use as this inside callback.


return:

returns -> the index of the first element in the array that 
staisfies the given function.

returns ->  returns undefined if none of the elements statisfy function

```
window.onload = function ()
{
    const team = [
        { name : ‘bill’, age : 10},
        { name : ‘linus’, age : 15},
        { name : ‘alex’, age : 20},
        { name : ‘stev’, age : 34},
    ];

    function isAdult(member)
    {
        return member.age >= 18;
    }

    var result = team[team.findIndex(isAdult)];

    console.log(result);
}
```

```
Output
Object { name: “alex”, age: 20 }
```

19. **includes**

the javascript array include method check if an array has a certain value among its entries.

parameters:

valueToFind -> the value to search for.

fromIndex -> (optional) The position in the array at which to begin to search by default it is 0.


note:

for negative values, the search starts from array.length + 
fromIndex(counting from backward) for example -1 represents the last element.


return:

return true -> if valueToFind is found anywhere with array.

return false -> if valueToFind is not found anywhere with array.

note:

the include method is case sensitive for strings and characters values.

```
window.onload = function ()
{
    
	var rgb = [“RED”, “GREEN”, “BLUE”]

	console.log(rgb.includes(“RED”))
    
}
```

```
Output
true
```

20. **reduceRight**

the javascript array reduceRight method executes a reducer function on each element of the array and applies it againt an accumulator.

parameters:

callback -> function to execute on each element of the array. it takes in:

	accumulator - it accumulates the callback’s return values it is initialvalue for the first call if supplied.


currentValue -> the current element beign passed from the array.


initialValue -> (optional) a value that will be passed to callback on first call. if not provided the last element acts as the 
accumulator on the first call and callback went executes on it



note:

calling reduceRight on an empty array without initialValue will throw type error.


return:

returns the value resulting after reducing the array.


notes:

reduceRight -> executes the given function for each value from right to left.

reduceRight -> does not change the original array.

it is almost alway safer to provide initial value.