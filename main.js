
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
// window.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {
//         addTask();
//     }
// });

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
var count = 0;


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
// window.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {
//         addNote();
//     }
// });

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


///***///PERSONAL GOALS SECTION////***/////

const goalsDiv = document.getElementById('goalsDiv');
const setGoalsDiv = document.getElementById('goalsDiv');
const goalsInput = document.getElementById('goalsInput');
const goalsBtn = document.getElementById('goalsBtn');
const goalsList = document.getElementById('goalsList');

goalsBtn.addEventListener('click', setGoal);


function setGoal() {
    if (goalsInput.value == '') {
        return null
    }
    //daysList.classList.toggle("show");   
    var count = 0;
    count++;
    var goal = document.createElement('li'); //create li element
    goal.setAttribute("class", "goal");
    goal.setAttribute("id", `goal${count}`);
    goalsList.appendChild(goal);

    var goalValue = goalsInput.value; //create variable = input value
    goal.innerHTML = goalValue; //set li html = input value

    goalsInput.value = ''; //set input field blank after item submitted

    const setGoalsBtn = document.createElement('button');
    setGoalsBtn.setAttribute("id", `goalBtn${count}`);
    setGoalsBtn.innerHTML = "X";
    setGoalsBtn.addEventListener('click', function (e) {
        goalsList.removeChild(goal);
    });

    goal.appendChild(setGoalsBtn);
}



///***///EDIT LABELS SECTION////***/////

const editLabelsSection = document.getElementById('editLabels');

const editLabelBtn = document.createElement('p');
editLabelBtn.innerHTML = " Edit Labels";
editLabelBtn.setAttribute("id", 'editLabelBtn');
editLabelBtn.setAttribute("class", 'type');
typeList.appendChild(editLabelBtn);
editLabelBtn.addEventListener('click', genLabelEdit);

//function that displays editLabelsSection

function genLabelEdit() {
    editLabelsSection.classList.toggle("show3");
}

//create edit labels section with orginal "noteType" list

labelsList = document.getElementById('labelsList');

for (var i = 0; i < (noteType.length); i++) {
    const labelInput = document.createElement('input');
    labelInput.setAttribute("id", `noteType${i}`)
    labelInput.value = noteType[i];
    labelsList.appendChild(labelInput);
}

//add label button feature
var ul = document.getElementById('labelsList');
const addLabelBtn = document.getElementById("addLabelBtn");

addLabelBtn.addEventListener('click', function (e) {
    const newField = document.createElement('input');
    newField.setAttribute("id", `noteType${ul.childNodes.length}`)
    labelsList.appendChild(newField);
});

//return list to previous state and cancel when you hit cancel

const cancelLabelBtn = document.getElementById('cancelLableBtn');
cancelLabelBtn.addEventListener('click', function (e) {
    editLabelsSection.classList.toggle("show3");
});

cancelLabelBtn.addEventListener('click', returnToInitialState);

function returnToInitialState(){
    while (labelsList.firstChild) {
        labelsList.removeChild(labelsList.lastChild);
    }
    for (var i = 0; i < (noteType.length); i++) {
        const labelInput = document.createElement('input');
        labelInput.setAttribute("id", `noteType${i}`)
        labelInput.value = noteType[i];
        labelsList.appendChild(labelInput);
    }
}


//add event to populate note list on label button click
const labelBtn = document.getElementById('noteBtn');
labelBtn.addEventListener('click', updateNoteTypeLog);


//remove label button feature

const removeLabelBtn = document.getElementById("removeLabelBtn");

removeLabelBtn.addEventListener('click', function (e) {
    let menu = labelsList;
    menu.removeChild(menu.lastElementChild);
});

//update button feature which updates noteType elements

const updateLabelBtn = document.getElementById("updateLabelBtn");
updateLabelBtn.addEventListener('click', updateNoteType);
updateLabelBtn.addEventListener('click', updateNoteTypeLog);

function updateNoteType() {
    var ul = document.getElementById('labelsList');
    var item = ul.getElementsByTagName("li");
    for (var i = 0; i < item.length; i++) {
        noteType.push(item[i]);
    }
    editLabelsSection.classList.toggle("show3");
}

//create new array out of items in input fields in order to repopuate list with

var updNoteType = [];
function updateNoteTypeLog() {
    updNoteType = [];
    while (typeList.lastChild.id !== 'editLabelBtn') {
        typeList.removeChild(typeList.lastChild);
    }
    for (var i = 0; i < ul.childNodes.length; i++) {
        var test = document.getElementById(`noteType${i}`);
        updNoteType.push(test.value);
    }
    for (var i = 0; i < ul.childNodes.length; i++) {
        var type = document.createElement('p');
        type.setAttribute("id", `type${i}`);
        type.setAttribute("class", 'type');
        type.innerHTML = updNoteType[i];
        type.addEventListener('click', addNote);
        type.addEventListener('click', hideNoteList);
        typeList.appendChild(type);
    }
}







