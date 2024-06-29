const firstbuttonElement=document.querySelector('button');
const secondbuttonElement=document.querySelector('#change-bg-btn');
console.dir(but);
function eventListener()
{
    console.dir(firstbuttonElement);
}
function chandeBackgroundColor(event)
{
  console.dir(event.target);
}
firstbuttonElement.addEventListener('click',eventListener);
secondbuttonElement.addEventListener('click',chandeBackgroundColor);
const firstParagraphElement =document.body.children[2].children[1];
console.log(firstParagraphElement);
const thirdParagraphElement =document.body.children[2].children[3];
console.log(thirdParagraphElement);
function removeParagraph()
{
    thirdParagraphElement.remove();
}
function chandeBackgroundColor(event)
{
  firstParagraphElement.style.chandeBackgroundColor='blue';
}
firstbuttonElement.addEventListener('click',removeParagraph);
secondbuttonElement.addEventListener('click',chandeBackgroundColor);
function changeBackgroundColor(event)
{
    firstParagraphElement.className='blue-bg';
    firstParagraphElement.classList.add('blue-bg');

}
secondbuttonElement.addEventListener('click',chandeBackgroundColor);