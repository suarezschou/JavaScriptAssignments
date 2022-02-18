/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/
let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";

  } else if (hour >= 20 && hour <= 22) { 
  textHolder.innerHTML = "snacktime";
  
} else 
  textHolder.innerHTML = "Goodnight";


/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/


/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/

let num1 = prompt();
let num2 = prompt();
if(num1 > num2) { 
  console.log("largest number is"+ num1);
 };
 if(num1 < num2) { 
  console.log("largest number is"+ num2);
 };

/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/
let x= 0;
let y=-1;
let z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}    
