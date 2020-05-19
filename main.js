
const body = document.getElementById('body');


const h1 = document.createElement('h1');
const title = document.createTextNode("Welcome to No Mind Clutter");
h1.appendChild(title);
body.appendChild(h1);

const p = document.createElement('p');
const introText = document.createTextNode(`Life can be messy and stressful. 
We keep a lot of thoughts in our minds. They in essence create traffic up there making it harder to think clearly and relax.
We exist to help you clear the traffic and breathe`);
p.appendChild(introText);
body.appendChild(p);

//create and add input field
const input = document.createElement('input');
body.appendChild(input);

//create and add submit button
const submitBtn = document.createElement('button');
submitBtn.innerHTML = "Add";
submitBtn.setAttribute("id", 'submitBtn');
body.appendChild(submitBtn);

    //add click and enter key events to submit button
    submitBtn.addEventListener('click', add);
    window.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            add();
        }
    });

//create list div and list and add both    
const listDiv = document.createElement('div');
listDiv.setAttribute("id", 'listDiv');
body.appendChild(listDiv);
const listUl = document.createElement('ul');
listDiv.setAttribute("id", 'listUl');
listDiv.appendChild(listUl);

 
var count = 0;

//submit button function
function add (){
 count++;
 var itemEle = document.createElement('li'); //create li element
 itemEle.setAttribute("id", `item${count}`); //set id of item element   
 listUl.appendChild(itemEle);

 var itemValue = input.value; //create variable = input value
 itemEle.innerHTML = itemValue; //set li html = input value

 input.value = ''; //set input field blank after item submitted

 const itemBtn = document.createElement('button');
 itemBtn.setAttribute("id", `item${count}`);
 itemBtn.innerHTML = "done";
 itemBtn.addEventListener('click', function(e){
     listUl.removeChild(itemEle);
 });

 itemEle.appendChild(itemBtn);
}










