let age=34;
let greetingText="hi am amrapali";
alert(greetingText);
greetingText="my name is amrapali";
alert(greetingText);
greetingText="KITTU";
alert(greetingText);
alert(age);
let hobbies=['sports','cooking','gardening'];
alert(hobbies[0]);
let job={Title: 'Developer',Place: 'pune',salary: 50000};
alert(job.Title);
let adultAge;
age=45;
function calculateAdultAge()
{
    adultAge=age-18;
}
calculateAdultAge();
alert(adultAge);
let b;
function ageCalculate()
{
    return age-12;
}
b=ageCalculate();
alert(b);
let c;
function calculate(userAge)
{
    return userAge-12;
}
c=calculate(34);
alert(c);
let person
{
    name:'max',
    greet()
    {
        alert('hello');
    }
};
person.greet();