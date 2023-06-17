const kodomAli = {
    name : 'kodom ali',
    money : 5000,
    studey : 'math',
    subjcts : ['calculas', 'algebra', 'geometry'],
    exam : function()
    {
        console.log(this);
         return (this.name + 'is participataing in exam');
    },
    arow : () =>
    {
        console.log(this);
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
function clickHandler()
{
    console.log('inside click handler', this);
}
document.getElementById('clik').addEventListener('click', function(){
    console.log(this);
})