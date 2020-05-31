
///***//edit note label section//***///

const EDIT_LABEL_SECTION = document.getElementById('note__editLabel__div');

//create edit label button and assign display function to it
const EDIT_LABEL_BTN = document.createElement('p');

EDIT_LABEL_BTN.innerHTML = " Edit Labels";
EDIT_LABEL_BTN.setAttribute("id", 'editLabelLink--note');
EDIT_LABEL_BTN.setAttribute("class", 'body__DD__element');
NOTE_DD_LIST.appendChild(EDIT_LABEL_BTN);
EDIT_LABEL_BTN.addEventListener('click', toggleDisplayLabelEditSection);

//function to display edit label section
function toggleDisplayLabelEditSection() {
    EDIT_LABEL_SECTION.classList.toggle("show");
}

//"add" button in edit label section
const ADD_LABEL_BTN = document.getElementById("button__editLabel__add--note");

ADD_LABEL_BTN.addEventListener('click', function (e) {
    const NEW_LABEL_INPUT = document.createElement('input');
    NEW_LABEL_INPUT.setAttribute("id", `noteType${LABEL_LIST.childNodes.length}`)
    LABEL_LIST.appendChild(NEW_LABEL_INPUT);
});

//"remove" button in edit label section

const REMOVE_LABEL_BTN = document.getElementById("button__editLabel__remove--note");

REMOVE_LABEL_BTN.addEventListener('click', function (e) {
    let menu = LABEL_LIST;
    menu.removeChild(menu.lastElementChild);
});

//"default" button in edit label section which returns orignal noteType elements to DD

const DEFAULT_LABEL_BTN = document.getElementById('button_editLabel__default--note');
DEFAULT_LABEL_BTN.addEventListener('click', function (e) {
    EDIT_LABEL_SECTION.classList.toggle("show");
});

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

//"update" button which updates noteType elements

NOTE_BTN.addEventListener('click', updateNoteDD);

const UPDATE_LABEL_BTN = document.getElementById("button_editLabel__update--note");
UPDATE_LABEL_BTN.addEventListener('click', toggleDisplayLabelEditSection);
UPDATE_LABEL_BTN.addEventListener('click', updateNoteDD);

//function below is called by 2 buttons. NOTE_BTN and UPDATE_LABEL_BTN
//each time you hit NOTE_BTN it looks at updNoteType array to gen updated list

var updNoteType = [];
function updateNoteDD() {
    updNoteType = []; //starts with empty array
    while (NOTE_DD_LIST.lastChild.id !== 'editLabelLink--note') {
        NOTE_DD_LIST.removeChild(NOTE_DD_LIST.lastChild);
    } //<-- remove all child nodes of DD list except the "edit labels" one

    //updates updNoteType with input values from LABEL_LIST
    for (var i = 0; i < LABEL_LIST.childNodes.length; i++) {
        var test = document.getElementById(`noteType${i}`);
        updNoteType.push(test.value);
    }
    //creates new note DD list with updNoteType that was just updated above
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
