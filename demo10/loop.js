for(let i=0;i<10;i++)
{
    console.log(i);
}
const users=['amrapali','srikanth','siddhanth','ramesh'];
for(const user of users)
{
    console.log(user);
}
const mine={
    name:'Amrapali',
    age:20,
    isAdmin:true
};
for(const Name in mine)
{
    console.log(Name);
    console.log(mine[Name]);
}
let isFinished=false;
while(!isFinished)
{
    isFinished=confirm('Do you want to quit');

}
console.log('Done!');