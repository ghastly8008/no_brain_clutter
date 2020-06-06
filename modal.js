///***//// QUICK FEEDBACK MODAL SECTION////***/////

// QUICK FEEDBACK MODALS DISPLAY AND CLOSE
const MODAL = document.getElementsByClassName('modal');
const MODAL_HISTORY_BTN = document.getElementsByClassName("header__quickFeedback__historyBtn");
const MODAL_PROUD_CLOSE_BTN = document.getElementsByClassName("close");

//add functions above to both modal hsitory buttons

for(var i=0; i < 2; i++) {
    MODAL_HISTORY_BTN[i].addEventListener('click', displayModal);
    MODAL_PROUD_CLOSE_BTN[i].addEventListener('click', closeModalOnSpanClick);
}

function displayModal() {
    var btnID = this.id;
    let currentNode = document.getElementById(btnID);
    let modalNode = currentNode.nextElementSibling;
    modalNode.style.display = "block";
}

function closeModalOnSpanClick(){
    var span = this;
    modalNode = span.parentNode.parentNode;
    modalNode.style.display = "none";
}

// When the user clicks off the modal on the window, close the modal 

window.onclick = function(event) {
    for(var i=0; i < 2; i++) {
        if (event.target == MODAL[i]) {
            MODAL[i].style.display = "none";
        }
    }
  }

// QUICK FEEDBACK MODALS ADD CONTENT

const QUICKFB_ENTER_BTN = document.getElementsByClassName('header__quickFeedback__enterBtn');

for(var i=0; i < 2; i++) {
    QUICKFB_ENTER_BTN[i].addEventListener('click', getBtnClicked);
    QUICKFB_ENTER_BTN[i].addEventListener('click', addItemToQuickFB);
}

//Create li 
function createQuickFBItem() {
    quickFBItem = document.createElement('li');
    quickFBItem.setAttribute("class", "quickFeedback__item");
    return quickFBItem;
}

function createSpanForItem(){
    spanForItem = document.createElement('span');
    spanForItem.setAttribute('class', 'modal__item__span');
    return spanForItem;
}

//Set value and ID of item

var enterBtnID;
function getBtnClicked(){
    var enterBtn = this;
    enterBtnID = enterBtn.id;
}

var date = new Date();
var day = date.getDay();
var month = date.getMonth() + 1;

var itemCount = 0;
function setQuickFBItem() {
    let currentNode = document.getElementById(enterBtnID);
    let inputNode = currentNode.previousElementSibling;
    let input = inputNode.value;
    if (input == '') return null;
    createQuickFBItem();
    quickFBItem.innerHTML = `${month}/${day}:   ${input}`;
    itemCount++;
    quickFBItem.setAttribute("id", `quickFB__Item${itemCount}`);
    return quickFBItem;
}

//Add li item to quick feedback -- here we are**

function addItemToQuickFB() {
    var enterBtn = this;
    var modalDiv = enterBtn.nextElementSibling.nextElementSibling;
    var modal = modalDiv.firstElementChild;
    var quickFBList = modal.lastElementChild;
    let inputNode = enterBtn.previousElementSibling;
    setQuickFBItem();
    createSpanForItem();
    // console.log(quickFBList);
    quickFBList.appendChild(quickFBItem);
    quickFBList.appendChild(spanForItem);
    inputNode.value = '';
}