const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Khan',
    salary:15000,
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount-tips-tax;
        return this.salary;
    } 
}


console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000,
}
//normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// console.log(friendlyPerson.salary);
//Bind upto it

// normalPerson.chargeBill.call(heroPerson, 900,100,10);
// normalPerson.chargeBill.call(heroPerson, 3000,300,30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,5000,500,50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);
// upto this "bind"

normalPerson.chargeBill.apply(heroPerson, [3000,300,30]);
normalPerson.chargeBill.apply(heroPerson,[5000,100,20]);
console.log(heroPerson.salary);