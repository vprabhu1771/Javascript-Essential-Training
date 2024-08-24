window.onload = function()
{
    var options = 4;

    switch (options) {
        case 1:
            good_morning();
            break;
    
        case 2:
            good_afternoon();
            break;

        case 3:
            good_evening();
            break;
    
        case 4:
            good_night();
            break;

        default:
            console.log("Invaild Option");
            break;
    }
}   

// step 1 function definition
function good_morning()
{
    console.log("Good Morning");
}

function good_afternoon()
{
    console.log("Good Afternoon");
}

function good_evening()
{
    console.log("Good Evening");
}

function good_night()
{
    console.log("Good Night");
}