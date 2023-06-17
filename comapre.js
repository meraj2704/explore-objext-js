const first = 2;
const second = 2;
if(first === second)
{
    console.log('they are same');
}
else{
    console.log('different');
}
const first2 = {a: 2};
const second2 = {a: 2};
if(first2 === second2)
{
    console.log('they are same');
}
else{
    console.log('different');
}
const third = second;
if(third === second)
{
    console.log('they are same');
}
else{
    console.log('different');
}
const first2String = JSON.stringify(first2);
const second2String = JSON.stringify(second2);
if(first2String === second2String)
{
    console.log('they are same');
}
else{
    console.log('different');
}
const first3 = {a:3, b:4, c:5};
const second3 = {a:3, c:5, b:4};
const first3string = JSON.stringify(first3);
const second3string = JSON.stringify(second3);
if(first3string === second3string)
{
    console.log('same');
}
else{
    console.log('different');
}