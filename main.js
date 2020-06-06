///***///GENERAL////***/////

//auto resize textera input boxes

const INPUT = document.getElementsByClassName('input');
for (let i = 0; i < INPUT.length; i++) {
  INPUT[i].setAttribute('style', 'height:' + (INPUT[i].scrollHeight) + 'px;overflow-y:hidden;');
  INPUT[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

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

NOTE_BTN.addEventListener('click', getBtnClicked);
NOTE_BTN.addEventListener('click', showDDList);

//create edit labels section with orginal "noteType" list
var noteType = ['Note', 'Idea', 'Reflection', 'Self Feedback', 'Other'];
const LABEL_LIST = document.getElementById('label__list--note');

//create input fields in the edit label section
for (var i = 0; i < (noteType.length); i++) {
    const LABEL_INPUT = document.createElement('input');
    LABEL_INPUT.setAttribute("id", `noteType${i}`)
    LABEL_INPUT.value = noteType[i];
    LABEL_LIST.appendChild(LABEL_INPUT);
}

///***///PERSONAL GOALS SECTION////***/////

const GOAL_BTN = document.getElementById('body__btn--goal');

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


