

//add label button feature
const ADD_LABEL_BTN = document.getElementById("button__editLabel__add--note");

ADD_LABEL_BTN.addEventListener('click', function (e) {
    const NEW_LABEL_INPUT = document.createElement('input');
    NEW_LABEL_INPUT.setAttribute("id", `noteType${LABEL_LIST.childNodes.length}`)
    LABEL_LIST.appendChild(NEW_LABEL_INPUT);
});
