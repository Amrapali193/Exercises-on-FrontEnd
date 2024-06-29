//document.body.childNodes[3].href='https://goggle.com';
//console.log(document);
//alert();
//let link=document.getElementById('john');
//link.href='https://goggle.com';

let think=document.querySelector('#john');
think.href='https://instagram.com';
//let pink=document.querySelector('a')//it selects first anchor tag element;
//pink.href='https://instagram.com';
alert();
//ADD AN ELEMENT without using html s
//1.create the new element
let newAchorElement=document.createElement('a');
newAchorElement.href='https://google.com';
newAchorElement.textContent= 'Goggle';
//2.get access to the parent element that should hold the element
let firstParagraph=document.querySelector('p');
//3.insert the new element into the parent element content
firstParagraph.append(newAchorElement);
firstParagraph.innerHTML='My name is Amrapali';
console.dir(firstParagraph.innerHTML);

//REMOVE ELEMENTS
//1.select the element that should be removed 
let firstH1Element=document.querySelector('h1');
//2.Remove it
//firstH1Element.remove();(used for latest verion of browsers)
firstH1Element.parentElement.removeChild(firstH1Element);
//MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);