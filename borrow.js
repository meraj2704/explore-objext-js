const kodomAli = {
    name : 'kodom ali',
    money : 5000,
    studey : 'math',
    subjcts : ['calculas', 'algebra', 'geometry'],
    exam : function()
    {
         return (this.name + 'is participataing in exam');
    },
    improveExam : function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    tretDey : function(amount, tips){
        this.money = this.money - amount-tips;
        return this.money;
    }
}

const badamAli ={
    name : 'badam ali',
    money : 8000 
}
const result = kodomAli.exam.call(badamAli);
console.log(result);

const badamMoney = kodomAli.tretDey.call(badamAli, 500, 20);
console.log(badamMoney);

const badamMoney2 = kodomAli.tretDey.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = kodomAli.tretDey.bind(badamAli);
const badamRemaing = badamAliTreat(2000,10);
console.log(badamRemaing);