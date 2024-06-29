let onlinecourse='Acdamind';
let price=200;
let goals=['read','write','learn'];
alert(onlinecourse);
alert(price);
alert(goals);
alert(goals[1]);
let group={onlinecourse: 'acadamind',price: 200,goals:['read','write','learn'] };
function getListItem(array,arrayIndex)
{
    let arrayElement=array[arrayIndex];
    return arrayElement;
}
let firstGoal=getListItem(goals,1)
alert(firstGoal);
