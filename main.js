
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
const TODO_BTN = document.getElementById('body__btn--todo');
const TODO_DD_LIST = document.getElementById('body__DD--todo');


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

///***///NOTE SECTION////***/////

const NOTE_BTN = document.getElementById('body__btn--note');
const NOTE_DD_LIST = document.getElementById('body__DD--note');

NOTE_BTN.addEventListener('click', showDDList);
NOTE_BTN.addEventListener('click', getBtnClicked);
NOTE_BTN.addEventListener('click', updateNoteDD);

///***//edit note label section//***///

const EDIT_LABEL_SECTION = document.getElementById('note__editLabel__div');

const EDIT_LABEL_BTN = document.createElement('p');
EDIT_LABEL_BTN.innerHTML = " Edit Labels";
EDIT_LABEL_BTN.setAttribute("id", 'editLabelLink--note');
EDIT_LABEL_BTN.setAttribute("class", 'body__DD__element');
NOTE_DD_LIST.appendChild(EDIT_LABEL_BTN);
EDIT_LABEL_BTN.addEventListener('click', displayLabelEditSection);

//function that displays editLabelsSection

function displayLabelEditSection() {
    EDIT_LABEL_SECTION.classList.toggle("show");
}

//create edit labels section with orginal "noteType" list
var noteType = ['Note', 'Idea', 'Reflection', 'Self Feedback', 'Other'];

const LABEL_LIST = document.getElementById('label__list--note');

for (var i = 0; i < (noteType.length); i++) {
    const LABEL_INPUT = document.createElement('input');
    LABEL_INPUT.setAttribute("id", `noteType${i}`)
    LABEL_INPUT.value = noteType[i];
    LABEL_LIST.appendChild(LABEL_INPUT);
}

//add label button feature
const ADD_LABEL_BTN = document.getElementById("button__editLabel__add--note");

ADD_LABEL_BTN.addEventListener('click', function (e) {
    const NEW_LABEL_INPUT = document.createElement('input');
    NEW_LABEL_INPUT.setAttribute("id", `noteType${LABEL_LIST.childNodes.length}`)
    LABEL_LIST.appendChild(NEW_LABEL_INPUT);
});

//return list to previous state and cancel when you hit cancel

const CANCEL_LABEL_BTN = document.getElementById('button_editLabel__default--note');
CANCEL_LABEL_BTN.addEventListener('click', function (e) {
    EDIT_LABEL_SECTION.classList.toggle("show");
});

CANCEL_LABEL_BTN.addEventListener('click', returnToInitialState);

function returnToInitialState() {
    while (LABEL_LIST.firstChild) {
        LABEL_LIST.removeChild(LABEL_LIST.lastChild);
    }
    for (var i = 0; i < (noteType.length); i++) {
        const LABEL_INPUT = document.createElement('input');
        LABEL_INPUT.setAttribute("id", `noteType${i}`)
        LABEL_INPUT.value = noteType[i];
        LABEL_LIST.appendChild(LABEL_INPUT);
    }
}

//remove label button feature

const REMOVE_LABEL_BTN = document.getElementById("button__editLabel__remove--note");

REMOVE_LABEL_BTN.addEventListener('click', function (e) {
    let menu = LABEL_LIST;
    menu.removeChild(menu.lastElementChild);
});

//update button feature which updates noteType elements

const UPDATE_LABEL_BTN = document.getElementById("button_editLabel__update--note");
UPDATE_LABEL_BTN.addEventListener('click', updateNoteType);
UPDATE_LABEL_BTN.addEventListener('click', updateNoteDD);

function updateNoteType() {
    var item = LABEL_LIST.getElementsByTagName("li");
    for (var i = 0; i < item.length; i++) {
        noteType.push(item[i]);
    }
    EDIT_LABEL_SECTION.classList.toggle("show");
}

//create new array out of items in input fields in order to repopuate list with

var updNoteType = [];

function updateNoteDD() {
    updNoteType = [];
    while (NOTE_DD_LIST.lastChild.id !== 'editLabelLink--note') {
        NOTE_DD_LIST.removeChild(NOTE_DD_LIST.lastChild);
    }
    for (var i = 0; i < LABEL_LIST.childNodes.length; i++) {
        var test = document.getElementById(`noteType${i}`);
        updNoteType.push(test.value);
    }
    for (var i = 0; i < LABEL_LIST.childNodes.length; i++) {
        var type = document.createElement('p');
        type.setAttribute("id", `body__DD__element--note${i}`);
        type.setAttribute("class", 'body__DD__element');
        type.innerHTML = updNoteType[i];
        type.addEventListener('click', addItemToList);
        type.addEventListener('click', hideDDList);
        NOTE_DD_LIST.appendChild(type);
    }
}

///***///PERSONAL GOALS SECTION////***/////

const GOAL_BTN = document.getElementById('body__btn--goal');
const GOAL_LIST = document.getElementById('body__list--goal');

GOAL_BTN.addEventListener('click', getBtnClicked);

GOAL_BTN.addEventListener('click', addGoalToList);

function addGoalToList() {
    var btn = this;
    let inputNode = btn.previousElementSibling;
    setBodyItem();
    createDoneBtnForItem();
    bodyList = btn.nextElementSibling;
    bodyItem.appendChild(bodyDoneBtn)
    bodyList.appendChild(bodyItem);
    inputNode.value = '';
}





