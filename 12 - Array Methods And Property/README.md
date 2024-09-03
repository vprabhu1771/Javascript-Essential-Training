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