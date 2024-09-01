# 2 - JavaScript Variables

1. **What is a variable ?**

A variable is a container for a value, like a number we might use in a `sum`, or a string that we might use as part of a sentence.

```
var x = 10;

var y = 20;

var sum = x + y;

var name = “prabhu”;
```

2. **Declaring a variable**

To use a variable, you’ve first got to create it — more accurately, we call this declaring the variable. 

To do this, we type the keyword `var` or `let` followed by the name you want to call your variable:

```
var x = 10;

var y = 20;

var sum = x + y;

var name = “prabhu”
```

Here we’re creating some variables called `x` , `y`, `sum` and `name`. Try typing these lines into your web browser’s console. 

After that, try creating a variable (or two) with your own name choices.

```
var age = 20;

var year = 2021;
```

Note: In JavaScript, all code instructions should end with a semi-colon (`;`)

You can test whether these values now exist in the execution environment by typing just the variable’s name, e.g. 

Try typing these lines into your web browser’s console

```
> x

10

> y

20

> sum

30

> name

prabhu

> age

20

> year

2021
```


3. **What empty variable ?**

```
var x;
```

Try typing these lines into your web browser’s console

```
> x
```

```
undefined
```

They currently have no value; they are empty containers. When you enter the variable names, you should get a value of undefined 
returned. 

If they don’t exist, you’ll get an error message


4. **Initializing a variable**

Initializing a variable

Once you’ve declared a variable, you can initialize it with a value. 

You do this by typing the variable name, followed by an equals sign (`=`), followed by the value you want to give it. 

For example:

```
var x = 10;

var y = 20;

var sum = x + y;

var name = “prabhu”;
```

Try going back to the console now and typing in these lines. You should see the value you’ve assigned to the variable returned in the console to confirm it, in each case. 

Again, you can return your variable values by typing their name into the console — try these again:

You can declare and initialize a variable at the same time, like this:

```
var x;

x = 10;
```