///***///HEADER SECTION////***/////

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

///***///TASK LIST SECTION////***/////



//create and add input field
const input = document.createElement('input');
input.value = "Enter";
taskDiv.appendChild(input);

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

taskDiv.appendChild(ddDiv);


//create list div and list and add both    
const listDiv = document.createElement('div');
listDiv.setAttribute("id", 'listDiv');
taskDiv.appendChild(listDiv);
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

//create note input field //check
const noteDiv = document.getElementById('noteDiv');
const noteInput = document.createElement('input');
noteInput.value = "Enter"

noteDiv.appendChild(noteInput); //add note input field to noteDiv


const noteDD = document.createElement('div');
noteDD.setAttribute("class", 'noteDD');

noteDiv.appendChild(noteDD); //add noteDD(btn + list) to noteDiv

//create note button
const noteBtn = document.createElement('button');
noteBtn.innerHTML = "Label";
noteBtn.setAttribute("class", 'noteBtn');
noteBtn.addEventListener('click', noteBtnClk);
noteDD.appendChild(noteBtn);  //add note Btn to noteDiv


//create notelist div and list and add to noteDiv    
const noteListDiv = document.createElement('div');
noteListDiv.setAttribute("class", 'notes');

noteBtn.appendChild(noteListDiv); //add note list div to button


//create type list for noteBtn
var noteType = ['Note','Idea','Reflection','Self Feedback','Other'];


for (var i=0 ;i<5 ; i++){
    var note = document.createElement('p');
    note.setAttribute("id", `type${i}`);
    note.setAttribute("class", 'type');
    note.innerHTML = noteType[i];
    //note.addEventListener('click', addNote);
    //note.addEventListener('click', hideNoteList);
    noteListDiv.appendChild(note);
};

noteBtn.appendChild(noteListDiv); //add noteList to noteBtn


//function to show and hide note list when noteBtn is clicked
function noteBtnClk(){
    if (input.value == ''){
        return null
    }
    noteListDiv.classList.toggle("show2");
}









