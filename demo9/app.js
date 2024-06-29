let paragraphElement=document.querySelector('p');
function changeParagraphText() {
paragraphElement.textContent='clicked';
console.log('paragrah Clicked');
}
paragraphElement.addEventListener('click',changeParagraphText);

//let inputElement=document.querySelector('input');
function retriveUserInput(event)
{
    //let enteredText=inputElement.value;
    let enteredText=event.target.value;
    let stringLength=enteredText.length;
    //let enteredText=event.data;
    console.log(enteredText);
}
inputElement.addEventListener('input',retriveUserInput);