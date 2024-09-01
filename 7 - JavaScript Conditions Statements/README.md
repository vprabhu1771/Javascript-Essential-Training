# 7 - JavaScript Conditions Statements

1. **if statement**

```
var age = 18

if (age >= 18) 
{
    console.log(“Congrats. You are Eligible for voting”);    
}
```

```
Output
Congrats. You are Eligible for voting
```

2. **if else statement**

```
var age = 18

if (age >= 18) 
{
    console.log(“Congrats. You are Eligible for voting”);    
}else
{
    console.log(“Sorry. You are Not Eligible for voting”);    
}
```

```
Output
Congrats. You are Eligible for voting
```

3. **if else with logical operator**

```
var age = 18

if (age >= 18 && age <= 100) 
{
    console.log(“Congrats. You are Eligible for voting”);    
}else
{
    console.log(“Sorry. You are Not Eligible for voting”);    
}
```

```
Output
Congrats. You are eligible for voting
```

4. **nested if else statement**

```
var age = 18

if (age >= 18) 
{
    console.log(“Congrats. You are eligible for bank loan”);    

    if (age >= 20) 
    {
        console.log(“Car Loan also available”);    
    } else {
        console.log(“Car Loan not available”);
    }
}
else
{
    console.log(“Sorry. You are not eligible for any bank loan”);
}
```

```
Output
Congrats. You are eligible for bank loan
Car Loan not available
```

5. **nested if else statement with logical operators**

```
var age = 23

if(age >= 18 && age <= 100)
{
    console.log(“Congrats. You are eligible for bank loan”);

    if (age >= 18 && age <= 22) 
    {
        console.log(“Car Loan also available”);
    }
    else
    {
        console.log(“Car Loan not available”);
    }
}
else
{
    console.log(“Sorry. You are not eligible for any bank loan”);
}
```

```
Output
Congrats. You are eligible for bank loan
Car Loan not available
```

6. **if elseif else ladder statement**

```
var no = 2;

if(no < 0)
{
    console.log(no + “ is negative no”);
}
else if(no > 0)
{
    console.log(no + “ is positive no”);
}
else
{
    console.log(no + “ is zero”);
}
```

```
Ouptut
2 is positive no
```

7. **ternary operator**

```
var age = 18;

console.log(age >= 18 ? “Eligible” : “Not Eligible”);

// ? true block : false block
// if           else
```

```
Output
Eligible
```

8. **switch statement**

```
var option = 3;

switch (option) {
    case 1:
        console.log(“Good Morning”);
        break;
    case 2:
        console.log(“Good Afternoon”);
        break;
    case 3:
        console.log(“Good Evening”);
        break;
    case 4:
        console.log(“Good Night”);
        break;

    default:
        console.log(“Invalid Option”);
        break;
}          else
```

```
Output
Good Evening
```