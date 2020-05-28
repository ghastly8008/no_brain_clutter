
///***///TODO LIST SECTION////***/////

//get all elements from taskDiv
const todoInput = document.getElementById('body__input--todo');
const todoBtn = document.getElementById('body__button--todo');
const todoDDList = document.getElementById('body__DD--todo');
const todoList = document.getElementById('body__list--todo');


//have days list appear on task button click
todoBtn.addEventListener('click', todoBtnClk);

//create days of week elements and add all to days list
var dayofWk = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (var i = 0; i < 7; i++) {
    var todoItem = document.createElement('p');
    todoItem.setAttribute("class", 'body__DD__item');
    todoItem.setAttribute("id", `body__DD__item--todo${i}`);
    // todoItem.setAttribute("class", 'todoItem');
    todoItem.innerHTML = dayofWk[i];
    todoItem.addEventListener('click', addTask);
    todoItem.addEventListener('click', hideDaysList);
    todoDDList.appendChild(todoItem);
}

//create element and check off button and add to task list
function addTask() {
    if (todoInput.value == '') {
        return null
    }
    //daysList.classList.toggle("show");   
    var count = 0;
    count++;
    var itemEle = document.createElement('li'); //create li element
    itemEle.setAttribute("class", "body__item");
    itemEle.setAttribute("id", `body__item--todo${count}`);
    todoList.appendChild(itemEle);

    var itemValue = todoInput.value; //create variable = input value
    itemEle.innerHTML = itemValue; //set li html = input value

    todoInput.value = ''; //set input field blank after item submitted

    const todoDoneBtn = document.createElement('button');
    todoDoneBtn.setAttribute("class", `body__button--done`);
    todoDoneBtn.setAttribute("id", `body__button--done--todo`);
    todoDoneBtn.innerHTML = "done";
    todoDoneBtn.addEventListener('click', function (e) {
        todoList.removeChild(itemEle);
    });

    itemEle.appendChild(todoDoneBtn);
}

//add click and enter key events to submit button
// window.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {
//         addTask();
//     }
// });


//make days list disapear if task button is hit again or day is selected

function hideDaysList() {
    todoDDList.classList.toggle("show");
}

function todoBtnClk() {
    if (todoInput.value == '') {
        return null
    }
    todoDDList.classList.toggle("show");
}

///***///NOTES SECTION////***/////

const noteInput = document.getElementById('body__input--note');
const noteBtn = document.getElementById('body__button--note');
const noteDDList = document.getElementById('body__DD--note');
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
    note.setAttribute("class", "body__item");
    note.setAttribute("id", `body__item--note${count2}`); //set id of item element   

    var noteValue = noteInput.value; //create variable = input value
    note.innerHTML = noteValue; //set li html = input value

    noteList.appendChild(note);

    noteInput.value = ''; //set input field blank after item submitted

    const doneNoteBtn = document.createElement('button');
    doneNoteBtn.setAttribute("class", `body__button--done`);
    doneNoteBtn.setAttribute("id", `body__button--done--note`);
    doneNoteBtn.innerHTML = "done";
    doneNoteBtn.addEventListener('click', function (e) {
        noteList.removeChild(note);
    });

    note.appendChild(doneNoteBtn);

}

//function to show and hide note list when noteBtn is clicked
function noteBtnClk() {
    if (noteInput.value == '') {
        return null
    }
    noteDDList.classList.toggle("show");
}

function hideNoteList() {
    noteDDList.classList.toggle("show");
}


///***///PERSONAL GOALS SECTION////***/////

const goalsDiv = document.getElementById('body__div--goal');
const goalsInput = document.getElementById('body__input--goal');
const goalsBtn = document.getElementById('body__button--goal');
const goalsList = document.getElementById('body__list--goal');

goalsBtn.addEventListener('click', setGoal);


function setGoal() {
    if (goalsInput.value == '') {
        return null
    }
    //daysList.classList.toggle("show");   
    var count = 0;
    count++;
    var goal = document.createElement('li'); //create li element
    goal.setAttribute("class", "body__item");
    goal.setAttribute("id", `body__item--goal${count}`);
    goalsList.appendChild(goal);

    var goalValue = goalsInput.value; //create variable = input value
    goal.innerHTML = goalValue; //set li html = input value

    goalsInput.value = ''; //set input field blank after item submitted

    const setGoalsBtn = document.createElement('button');
    setGoalsBtn.setAttribute("class", `body__button--done`);
    setGoalsBtn.setAttribute("id", `body__button--done--goal`);
    setGoalsBtn.innerHTML = "X";
    setGoalsBtn.addEventListener('click', function (e) {
        goalsList.removeChild(goal);
    });

    goal.appendChild(setGoalsBtn);
}



///***///EDIT LABELS SECTION////***/////

const editLabelSection = document.getElementById('note__editLabel__div');

const editLabelBtn = document.createElement('p');
editLabelBtn.innerHTML = " Edit Labels";
editLabelBtn.setAttribute("id", 'editLabelLink--note');
editLabelBtn.setAttribute("class", 'body__DD__item');
noteDDList.appendChild(editLabelBtn);
editLabelBtn.addEventListener('click', genLabelEdit);

//function that displays editLabelsSection

function genLabelEdit() {
    editLabelSection.classList.toggle("show");
}

//create edit labels section with orginal "noteType" list

labelList = document.getElementById('label__list--note');

for (var i = 0; i < (noteType.length); i++) {
    const labelInput = document.createElement('input');
    labelInput.setAttribute("id", `noteType${i}`)
    labelInput.value = noteType[i];
    labelList.appendChild(labelInput);
}

//add label button feature
var ul = document.getElementById('label__list--note');
const addLabelBtn = document.getElementById("button__editLabel__add--note");

addLabelBtn.addEventListener('click', function (e) {
    const newField = document.createElement('input');
    newField.setAttribute("id", `noteType${ul.childNodes.length}`)
    labelList.appendChild(newField);
});

//return list to previous state and cancel when you hit cancel

const cancelLabelBtn = document.getElementById('button_editLabel__default--note');
cancelLabelBtn.addEventListener('click', function (e) {
    editLabelSection.classList.toggle("show");
});

cancelLabelBtn.addEventListener('click', returnToInitialState);

function returnToInitialState(){
    while (labelList.firstChild) {
        labelList.removeChild(labelList.lastChild);
    }
    for (var i = 0; i < (noteType.length); i++) {
        const labelInput = document.createElement('input');
        labelInput.setAttribute("id", `noteType${i}`)
        labelInput.value = noteType[i];
        labelList.appendChild(labelInput);
    }
}


//add event to populate note list on label button click
const labelBtn = document.getElementById('body__button--note');
labelBtn.addEventListener('click', updateNoteTypeLog);


//remove label button feature

const removeLabelBtn = document.getElementById("button__editLabel__remove--note");

removeLabelBtn.addEventListener('click', function (e) {
    let menu = labelList;
    menu.removeChild(menu.lastElementChild);
});

//update button feature which updates noteType elements

const updateLabelBtn = document.getElementById("button_editLabel__update--note");
updateLabelBtn.addEventListener('click', updateNoteType);
updateLabelBtn.addEventListener('click', updateNoteTypeLog);

function updateNoteType() {
    var ul = document.getElementById('label__list--note');
    var item = ul.getElementsByTagName("li");
    for (var i = 0; i < item.length; i++) {
        noteType.push(item[i]);
    }
    editLabelSection.classList.toggle("show");
}

//create new array out of items in input fields in order to repopuate list with

var updNoteType = [];
function updateNoteTypeLog() {
    updNoteType = [];
    while (noteDDList.lastChild.id !== 'editLabelLink--note') {
        noteDDList.removeChild(noteDDList.lastChild);
    }
    for (var i = 0; i < ul.childNodes.length; i++) {
        var test = document.getElementById(`noteType${i}`);
        updNoteType.push(test.value);
    }
    for (var i = 0; i < ul.childNodes.length; i++) {
        var type = document.createElement('p');
        type.setAttribute("id", `body__DD__item--note${i}`);
        type.setAttribute("class", 'body__DD__item');
        type.innerHTML = updNoteType[i];
        type.addEventListener('click', addNote);
        type.addEventListener('click', hideNoteList);
        noteDDList.appendChild(type);
    }
}







