function greetUser(greetingPrefix,userName='user')
{
    //console.log(greetingPrefix+' '+userName+'!');
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hi','Amrapali');
greetUser('Hello');

/*function sumUp(num1,num2,num3=0)
{
    return num1+num2+num3;
}

console.log(sumUp(1,2));*/

function sumUp(numbers)
{
    let result=0;
    for(const number of numbers)
    {
        result=result+number;
    }
    return result;
}
console.log(sumUp([1,2,3,4]));

function sumUp(...numbers)
{
    let result=0;
    for(const number of numbers)
    {
        result+=number;
    }
    return result;
}

const inputNumbers=[1,5,10,11,20,31];
console.log(sumUp(...inputNumbers));
console.log(sumUp);