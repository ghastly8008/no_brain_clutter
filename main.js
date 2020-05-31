
///***///GENERAL////***/////

//Find ID of button clicked 

var btnID;
function getBtnClicked(){
    var btn = this;
    btnID = btn.id;
}

//show drop down list

function showDDList() {
    var btn = this;
    btnChildNodes = btn.children[0];
    let inputNode = btn.previousElementSibling;
    let input = inputNode.value;
    // console.log(input);
    if (input == '') return null;
    btnChildNodes.classList.toggle("show");
}

function hideDDList() {
    var btn = this;
    btnDD = btn.parentNode;
    btnDD.classList.toggle("show");
}

//Create item 

function createBodyItem() {
    bodyItem = document.createElement('li');
    bodyItem.setAttribute("class", "body__item");
    return bodyItem;
}

//Set value and ID of item
var count = 0;
function setBodyItem() {
    let currentNode = document.getElementById(btnID);
    let inputNode = currentNode.previousElementSibling;
    let input = inputNode.value;
    if (input == '') return null;
    createBodyItem();
    bodyItem.innerHTML = input;
    count++;
    bodyItem.setAttribute("id", `body__item${count}`);
    return bodyItem;
}

//create done button for item
function createDoneBtnForItem() {
    bodyDoneBtn = document.createElement('button');
    bodyDoneBtn.setAttribute("class", `body__btn--done`);
    bodyDoneBtn.innerHTML = "done";
    bodyDoneBtn.addEventListener('click', removeItemWithDoneBtn)
    return bodyDoneBtn;
}

//add item and button to list
function addItemToList() {
    var btn = this;
    bodyBtn = btn.parentNode.parentNode;
    let inputNode = bodyBtn.previousElementSibling;
    let input = inputNode.value;
    setBodyItem();
    createDoneBtnForItem();
    bodyList = bodyBtn.nextElementSibling;
    bodyItem.appendChild(bodyDoneBtn)
    bodyList.appendChild(bodyItem);
    inputNode.value = '';
}

//functions to remove parent of done button (li element) on click

function removeItemWithDoneBtn () {
    var li = this.parentNode;
    removeElementByID(li.id);
}

function removeElementByID(id) {
    var elem = document.getElementById(id);
    return removeElement(elem);
}

function removeElement(elem) {
    return elem.parentNode.removeChild(elem);
}

///***///TODO LIST SECTION////***/////

// Get elements from todo section
// const TODO_INPUT = document.getElementById('body__input--todo');
const TODO_BTN = document.getElementById('body__btn--todo');
const TODO_DD_LIST = document.getElementById('body__DD--todo');
// const TODO_LIST = document.getElementById('body__list--todo');

//Reveal drop down list on click of todo button
TODO_BTN.addEventListener('click', showDDList);
TODO_BTN.addEventListener('click', getBtnClicked);

//create todo drop down list elements
var todoDDList = ['No Set Day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (var i = 0; i < todoDDList.length; i++) {
    var todoDDElement = document.createElement('p');
    todoDDElement.setAttribute("class", 'body__DD__element');
    todoDDElement.setAttribute("id", `body__DD__element--todo${i}`);
    todoDDElement.innerHTML = todoDDList[i];
    todoDDElement.addEventListener('click', addItemToList);
    todoDDElement.addEventListener('click', hideDDList);
    TODO_DD_LIST.appendChild(todoDDElement);
}



///***///NOTES SECTION////***/////

const noteInput = document.getElementById('body__input--note');
const NOTE_BTN = document.getElementById('body__btn--note');
const noteDDList = document.getElementById('body__DD--note');
const noteList = document.getElementById('body__list--note');

// noteBtn.addEventListener('click', noteBtnClk);

NOTE_BTN.addEventListener('click', showDDList);
NOTE_BTN.addEventListener('click', getBtnClicked);

//create type list for noteBtn
var noteType = ['Note', 'Idea', 'Reflection', 'Self Feedback', 'Other'];




// //create element and check off button and add to task list
// function addNote() {
//     if (noteInput.value == '') return null

//     var note = document.createElement('li'); //create li element
//     note.setAttribute("class", "body__item");
//     // note.setAttribute("id", `body__item--note`); //set id of item element   

//     var noteValue = noteInput.value; //create variable = input value
//     note.innerHTML = noteValue; //set li html = input value

//     noteList.appendChild(note);

//     noteInput.value = ''; //set input field blank after item submitted

//     const doneNoteBtn = document.createElement('button');
//     doneNoteBtn.setAttribute("class", `body__btn--done`);
//     doneNoteBtn.setAttribute("id", `body__btn--done--note`);
//     doneNoteBtn.innerHTML = "done";
//     doneNoteBtn.addEventListener('click', function (e) {
//         noteList.removeChild(note);
//     });

//     note.appendChild(doneNoteBtn);

// }

// //function to show and hide note list when noteBtn is clicked
// function noteBtnClk() {
//     if (noteInput.value == '') {
//         return null
//     }
//     noteDDList.classList.toggle("show");
// }

// function hideNoteList() {
//     noteDDList.classList.toggle("show");
// }

///***///EDIT LABELS SECTION////***/////

const editLabelSection = document.getElementById('note__editLabel__div');

const editLabelBtn = document.createElement('p');
editLabelBtn.innerHTML = " Edit Labels";
editLabelBtn.setAttribute("id", 'editLabelLink--note');
editLabelBtn.setAttribute("class", 'body__DD__element');
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

function returnToInitialState() {
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
const labelBtn = document.getElementById('body__btn--note');
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
        type.setAttribute("id", `body__DD__element--note${i}`);
        type.setAttribute("class", 'body__DD__element');
        type.innerHTML = updNoteType[i];
        type.addEventListener('click', addItemToList);
        type.addEventListener('click', hideDDList);
        noteDDList.appendChild(type);
    }
}




///***///PERSONAL GOALS SECTION////***/////

const goalsDiv = document.getElementById('body__div--goal');
const goalsInput = document.getElementById('body__input--goal');
const goalsBtn = document.getElementById('body__btn--goal');
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
    setGoalsBtn.setAttribute("class", `body__btn--done`);
    setGoalsBtn.setAttribute("id", `body__btn--done--goal`);
    setGoalsBtn.innerHTML = "X";
    setGoalsBtn.addEventListener('click', function (e) {
        goalsList.removeChild(goal);
    });

    goal.appendChild(setGoalsBtn);
}






