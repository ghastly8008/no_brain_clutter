
///***///TASK LIST SECTION////***/////

//get all elements from taskDiv
const taskInput = document.getElementById('taskInput');
const taskDropDown = document.getElementById('taskDropDown');
const taskBtn = document.getElementById('taskBtn');
const daysList = document.getElementById('days');
const taskList = document.getElementById('taskList');

//have days list appear on task button click
taskBtn.addEventListener('click', taskBtnClk);

//create days of week elements and add all to days list
var dayofWk = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (var i = 0; i < 7; i++) {
    var day = document.createElement('p');
    day.setAttribute("id", `day${i}`);
    day.setAttribute("class", 'day');
    day.innerHTML = dayofWk[i];
    day.addEventListener('click', addTask);
    day.addEventListener('click', hideDaysList);
    daysList.appendChild(day);
}

//create element and check off button and add to task list
function addTask() {
    if (taskInput.value == '') {
        return null
    }
    //daysList.classList.toggle("show");   
    var count = 0;
    count++;
    var itemEle = document.createElement('li'); //create li element
    itemEle.setAttribute("id", `item${count}`); //set id of item element   
    taskList.appendChild(itemEle);

    var itemValue = taskInput.value; //create variable = input value
    itemEle.innerHTML = itemValue; //set li html = input value

    taskInput.value = ''; //set input field blank after item submitted

    const itemBtn = document.createElement('button');
    itemBtn.setAttribute("id", `item${count}`);
    itemBtn.innerHTML = "done";
    itemBtn.addEventListener('click', function (e) {
        taskList.removeChild(itemEle);
    });

    itemEle.appendChild(itemBtn);
}

//add click and enter key events to submit button
window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

//make days list disapear if task button is hit again or day is selected

function hideDaysList() {
    daysList.classList.toggle("show");
}

function taskBtnClk() {
    if (taskInput.value == '') {
        return null
    }
    daysList.classList.toggle("show");
}   

///***///NOTES SECTION////***/////

//create note input field //check
const noteDiv = document.getElementById('noteDiv');
const noteInput = document.getElementById('noteInput');
const noteDD = document.getElementById('noteDropDown');
const noteBtn = document.getElementById('noteBtn');
const noteListDiv = document.getElementById('notes');

noteBtn.addEventListener('click', noteBtnClk);

//create type list for noteBtn
var noteType = ['Note', 'Idea', 'Reflection', 'Self Feedback', 'Other'];
for (var i = 0; i < 5; i++) {
    var note = document.createElement('p');
    note.setAttribute("id", `type${i}`);
    note.setAttribute("class", 'type');
    note.innerHTML = noteType[i];
    //note.addEventListener('click', addNote);
    //note.addEventListener('click', hideNoteList);
    noteListDiv.appendChild(note);
};

//function to show and hide note list when noteBtn is clicked
function noteBtnClk() {
    if (noteInput.value == '') {
        return null
    }
    noteListDiv.classList.toggle("show2");
}


/////Add notes ////

//create element and check off button and add to task list
function addTask() {
    if (taskInput.value == '') {
        return null
    }
    //daysList.classList.toggle("show");   
    var count = 0;
    count++;
    var itemEle = document.createElement('li'); //create li element
    itemEle.setAttribute("id", `item${count}`); //set id of item element   
    taskList.appendChild(itemEle);

    var itemValue = taskInput.value; //create variable = input value
    itemEle.innerHTML = itemValue; //set li html = input value

    taskInput.value = ''; //set input field blank after item submitted

    const itemBtn = document.createElement('button');
    itemBtn.setAttribute("id", `item${count}`);
    itemBtn.innerHTML = "done";
    itemBtn.addEventListener('click', function (e) {
        taskList.removeChild(itemEle);
    });

    itemEle.appendChild(itemBtn);
}

//add click and enter key events to submit button
window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

//make days list disapear if task button is hit again or day is selected

function hideDaysList() {
    daysList.classList.toggle("show");
}

function ddBtnHov() {
    if (taskInput.value == '') {
        return null
    }
    daysList.classList.toggle("show");
}   








