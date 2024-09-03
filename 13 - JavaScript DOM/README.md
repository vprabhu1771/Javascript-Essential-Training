# 12 - JavaScript DOM

1. **Introduction to the DOM**

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications. 

2. **What is the DOM**

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. 

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

3. **querySelectorAll**

For example, the DOM specifies that the querySelectorAll method in this code snippet must return a list of all the `<p>` elements in the document:


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
    const paragraphs = document.querySelectorAll("p");
    

    console.log(paragraphs);
}
```

```
Output

NodeList(4) [ p, p, p, p ]
```