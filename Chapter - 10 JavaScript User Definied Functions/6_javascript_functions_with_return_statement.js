window.onload = function()
{
    var a = 1, b = 2;

    // step 2 function calling with arguments auto
    display_value(a,b);

    display_msg("Minimum Value")

    display_msg(min(a,b));
 
    display_msg("Maximum Value")

    display_msg(max(a,b));
}   

// step 1 function definition with parameter
function min(x,y)
{
    if(x < y)
        return x;
    else
        return y;
}

function max(x,y)
{
    if(x > y)
        return x;
    else
        return y;
}

function display_value(x,y)
{
    console.log("x = " + x + " y = " + y);
}


function display_msg(msg) {
    console.log(msg);
}