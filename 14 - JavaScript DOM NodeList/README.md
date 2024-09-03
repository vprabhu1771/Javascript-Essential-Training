1. **NodeList**

NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as `document.querySelectorAll()`.


Note: Although NodeList is not an Array, it is possible to iterate over it with `forEach()`. It can also be converted to a real Array using `Array.from()`.

However, some older browsers have not implemented `NodeList.forEach()` nor `Array.from()`. This can be circumvented by using `Array.prototype.forEach()` — see this document's Example.


Live vs. Static NodeLists

Although they are both considered NodeLists, there are 2 varieties of NodeList: live and static.


Live NodeLists

In some cases, the NodeList is live, which means that changes in the DOM automatically update the collection.


Static NodeLists

In other cases, the NodeList is static, where any changes in the DOM does not affect the content of the collection. The ubiquitous `document.querySelectorAll()` method returns a static NodeList.

It's good to keep this distinction in mind when you choose how to iterate over the items in the NodeList, and whether you should cache the list's length.


2. **NodeList - length Properties**

NodeList.length

The number of nodes in the NodeList.

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

<p>Good Morning</p>

<p>Good Afternoon</p>

<p>Good Night</p>

<p>Good Evening</p>

</body>
</html>
```


`main.js`

```
window.onload = function()
{
    const parent = document.querySelectorAll('p');

    console.log(parent.length);

}
```

3. **NodeList - item method**

`NodeList.item()`

Returns an item in the list by its `index`, or `null` if the `index` is `out-of-bounds`.

An alternative to accessing `nodeList[i]` (which instead returns  undefined when i is `out-of-bounds`). This is mostly useful for non-JavaScript DOM implementations.


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

<p>Good Morning</p>

<p>Good Afternoon</p>

<p>Good Night</p>

<p>Good Evening</p>

</body>
</html>
```

`main.js`

```
window.onload = function()
{
    const parent = document.querySelectorAll('p');

    console.log(parent.item(0));

    // or

    console.log(parent.item(0).textContent);

}
```

4. **NodeList - entries method**

`NodeList.entries()`

Returns an iterator, allowing code to go through all `key/value` pairs contained in the collection. 
(In this case, the `keys` are numbers starting from `0` and the `values` are nodes.)


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

<p>Good Morning</p>

<p>Good Afternoon</p>

<p>Good Night</p>

<p>Good Evening</p>

</body>
</html>
```


`main.js`

```
window.onload = function()
{
    const parent = document.querySelectorAll('p');

    for(var element of parent.entries())
    {
        console.log(element[0] + " " + element[1]);
    }

    // or

    for(var element of parent.entries())
    {
        console.log(element[0] + " " + element[1].textContent);
    }
}
```

5. **NodeList - forEach method**

`NodeList.forEach()`

Executes a provided function once per NodeList element, passing the element as an argument to the function.


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

<p>Good Morning</p>

<p>Good Afternoon</p>

<p>Good Night</p>

<p>Good Evening</p>

</body>
</html>
```

`main.js`

```
window.onload = function()
{
    const parent = document.querySelectorAll('p');

    parent.forEach(function(el){
        console.log(el.textContent);
    })
}
```

6. **NodeList - keys method**

`NodeList.keys()`

Returns an iterator, allowing code to go through all the keys of the `key/value` pairs contained in the collection. (In this case, the `keys` are numbers starting from `0`.)


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

<p>Good Morning</p>

<p>Good Afternoon</p>

<p>Good Night</p>

<p>Good Evening</p>

</body>
</html>
```

`main.js`

```
window.onload = function()
{
    const parent = document.querySelectorAll('p');

    for(var key of parent.keys())
    {
        console.log(key);
    }
}
```

7. **NodeList - values method**

`NodeList.values()`

Returns an iterator allowing code to go through all values (nodes) of the `key/value` pairs contained in the collection.

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

<p>Good Morning</p>

<p>Good Afternoon</p>

<p>Good Night</p>

<p>Good Evening</p>

</body>
</html>
```

`main.js`

```
window.onload = function()
{
    const parent = document.querySelectorAll('p');

    for(var value of parent.values())
    {
        console.log(value.textContent);
    }
}
```