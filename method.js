const student = {
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
const output = student.exam();
console.log(output);
const reExam = student.improveExam('algebra');
console.log(reExam);
const remaingMoney = student.tretDey(1000,60);
console.log(remaingMoney);