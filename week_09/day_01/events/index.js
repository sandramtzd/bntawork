const button = document.querySelector('#btn')
const box = document.querySelector('#box');
const caption = document.querySelector("#caption");
const input = document.querySelector("#text-input");
const dropdown =document.querySelector('#color-picker');
const history = document.querySelector('#history')

// button click

const printButtonConfirmation = () => {
    console.log("button clicked");
}

button.addEventListener("click", printButtonConfirmation);

// text input

input.addEventListener("input", (event) => {
    //console.log(event.target.value);
    caption.innerText = event.target.value;

})

// dropdown 

const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = content;
    history.appendChild(newListItem);


}

dropdown.addEventListener("change", (event)=> {
    const newColour = event.target.value;
    box.setAttribute("style", `background-color: ${newColour}`);
    createAndAppendListItem(newColour);
    
})
