
///***//edit note label section//***///

const EDIT_LABEL_SECTION = document.getElementById('note__editLabel__div');

const EDIT_LABEL_BTN = document.createElement('p');
EDIT_LABEL_BTN.innerHTML = " Edit Labels";
EDIT_LABEL_BTN.setAttribute("id", 'editLabelLink--note');
EDIT_LABEL_BTN.setAttribute("class", 'body__DD__element');
NOTE_DD_LIST.appendChild(EDIT_LABEL_BTN);
EDIT_LABEL_BTN.addEventListener('click', displayLabelEditSection);


function displayLabelEditSection() {
    EDIT_LABEL_SECTION.classList.toggle("show");
}

//add label button feature
const ADD_LABEL_BTN = document.getElementById("button__editLabel__add--note");

ADD_LABEL_BTN.addEventListener('click', function (e) {
    const NEW_LABEL_INPUT = document.createElement('input');
    NEW_LABEL_INPUT.setAttribute("id", `noteType${LABEL_LIST.childNodes.length}`)
    LABEL_LIST.appendChild(NEW_LABEL_INPUT);
});

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

const DEFAULT_LABEL_BTN = document.getElementById('button_editLabel__default--note');
DEFAULT_LABEL_BTN.addEventListener('click', function (e) {
    EDIT_LABEL_SECTION.classList.toggle("show");
});

//return list to original state when you hit default button

DEFAULT_LABEL_BTN.addEventListener('click', returnToInitialState);

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

var updNoteType = [];
NOTE_BTN.addEventListener('click', updateNoteDD);

function updateNoteDD() {
    updNoteType = [];
    while (NOTE_DD_LIST.lastChild.id !== 'editLabelLink--note') {
        NOTE_DD_LIST.removeChild(NOTE_DD_LIST.lastChild);
    } //<-- remove all child nodes of DD list except the "edit labels" one
    
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
