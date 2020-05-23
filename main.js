
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
    itemEle.setAttribute("class", "taskListItems");
    itemEle.setAttribute("id", `task${count}`); 
    taskList.appendChild(itemEle);

    var itemValue = taskInput.value; //create variable = input value
    itemEle.innerHTML = itemValue; //set li html = input value

    taskInput.value = ''; //set input field blank after item submitted

    const itemBtn = document.createElement('button');
    itemBtn.setAttribute("id", `taskBtn${count}`);
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
const typeList = document.getElementById('notes');
const noteList = document.getElementById('noteList');

noteBtn.addEventListener('click', noteBtnClk);

//create type list for noteBtn
var noteType = ['Note', 'Idea', 'Reflection', 'Self Feedback', 'Other'];
for (var i = 0; i < 5; i++) {
    var type = document.createElement('p');
    type.setAttribute("id", `type${i}`);
    type.setAttribute("class", 'type');
    type.innerHTML = noteType[i];
    type.addEventListener('click', addNote);
    type.addEventListener('click', hideNoteList);
    typeList.appendChild(type);
};

//create element and check off button and add to task list
function addNote() {
    if (noteInput.value == '') {
        return null
    }
    //daysList.classList.toggle("show");   
    var count2 = 0;
    count2++;
    var note = document.createElement('li'); //create li element
    note.setAttribute("class", "noteListItems");
    note.setAttribute("id", `note${count2}`); //set id of item element   

    var noteValue = noteInput.value; //create variable = input value
    note.innerHTML = noteValue; //set li html = input value

    noteList.appendChild(note);

    noteInput.value = ''; //set input field blank after item submitted

    const noteBtn = document.createElement('button');
    noteBtn.setAttribute("id", `noteBtn${count2}`);
    noteBtn.innerHTML = "done";
    noteBtn.addEventListener('click', function (e) {
    noteList.removeChild(note);
    });

    note.appendChild(noteBtn);

}

//add click and enter key events to submit button
window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addNote();
    }
});

//make days list disapear if task button is hit again or day is selected

//function to show and hide note list when noteBtn is clicked
function noteBtnClk() {
    if (noteInput.value == '') {
        return null
    }
    typeList.classList.toggle("show2");
}

function hideNoteList() {
    typeList.classList.toggle("show2");
}








