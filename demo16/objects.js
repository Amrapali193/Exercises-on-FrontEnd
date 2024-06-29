class Job{
    constructor(jobTitle,place,salary)
    {
        this.title=jobTitle;
        this.location=place;
        this.salary=salary;
    }

    describe()
    {
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);
    }
}
const developer=new Job('Developer','New York',50000);
const con=new Job('Cook','munich',4000);
//console.log(developer);
//console.log(con);
developer.describe();
con.describe();