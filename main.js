
// const taskDiv = document.createElement('div');
// body.appendChild(taskDiv);

const header = document.getElementById('header');
const body = document.getElementById('body');


const h1 = document.createElement('h1');
const title = document.createTextNode("Welcome to No Mind Clutter");
h1.appendChild(title);
header.appendChild(h1);

const p = document.createElement('p');
const introText = document.createTextNode(`Life can be messy and stressful. 
We keep a lot of thoughts in our minds. They in essence create traffic up there making it harder to think clearly and relax.
We exist to help you clear the traffic and breathe`);
p.appendChild(introText);
header.appendChild(p);

//create "task" Item

const task = document.createElement('p');
task.setAttribute("id", "task");
const taskText = document.createTextNode("Enter task");
task.appendChild(taskText);
body.appendChild(task);




//create and add input field
const input = document.createElement('input');
body.appendChild(input);

    //add click and enter key events to submit button
    window.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            add();
        }
    });


//create drop down day of week
//create dd div
const ddDiv = document.createElement('div');
ddDiv.setAttribute("class", 'dropdown');

//create dd button
const ddBtn = document.createElement('button');
ddBtn.innerHTML = "Add to";
ddBtn.setAttribute("class", 'dropdownBtn');
ddBtn.addEventListener('click', ddBtnHov);

//add dd button to dd div
ddDiv.appendChild(ddBtn);

//create list of days div that button will reveal
const daysList = document.createElement('div');
daysList.setAttribute("class", 'days');
daysList.setAttribute("id", "days");

var dayofWk = ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday','Sunday'];


//create elemnt for each day and add to days div
for (var i = 0 ; i<7 ; i++){
    var day = document.createElement('p');
    day.setAttribute("id", `day${i}`);
    day.setAttribute("class", 'day');
    day.innerHTML = dayofWk[i];
    day.addEventListener('click', add);
    day.addEventListener('click', hideDaysList);
    daysList.appendChild(day);
}

ddBtn.appendChild(daysList);

// window.addEventListener('click', hideDaysList2);
// function hideDaysList2(){
//     if (daysList.classList.toggle("show") == true){;
//         console.log("test");
// }}

function hideDaysList(){
    daysList.classList.toggle("show");
}

function ddBtnHov(){
    if (input.value == ''){
        return null
    }
    daysList.classList.toggle("show");
}

//add dd div to body

body.appendChild(ddDiv);


//create list div and list and add both    
const listDiv = document.createElement('div');
listDiv.setAttribute("id", 'listDiv');
body.appendChild(listDiv);
const listUl = document.createElement('ul');
listDiv.setAttribute("id", 'listUl');
listDiv.appendChild(listUl);

var count = 0;

//submit button function
function add (){
 if (input.value == ''){
     return null
 }
 //daysList.classList.toggle("show");   
 count++;
 var itemEle = document.createElement('li'); //create li element
 itemEle.setAttribute("id", `item${count}`); //set id of item element   
 listUl.appendChild(itemEle);

 var itemValue = input.value; //create variable = input value
 itemEle.innerHTML = itemValue; //set li html = input value

 input.value = ''; //set input field blank after item submitted

 const itemBtn = document.createElement('button');
 itemBtn.setAttribute("id", `item${count}`);
 itemBtn.innerHTML = "done";
 itemBtn.addEventListener('click', function(e){
     listUl.removeChild(itemEle);
 });

 itemEle.appendChild(itemBtn);
}


///***///NOTES SECTION////***/////

const notesDiv = document.createElement('div');
body.appendChild(notesDiv);


const notesInput = document.createElement('input');
notesDiv.appendChild(notesInput);













