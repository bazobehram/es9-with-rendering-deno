async function* load(){
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

let l = load();
l.next().then(r=>console.log(r))
l.next().then(r=>console.log(r))
l.next().then(r=>console.log(r))
l.next().then(r=>console.log(r))

console.log("//***************************/");

async function* load2(){
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function test(){
  for await (const val of load2()){
     console.log(val)
  }
}
test();
console.log('end of script')


async function fntest(){
  for await (const val of [10,20,30,40]){
     console.log(val)
  }
}
fntest();
console.log('end of script')

const student = {
  age:10,
  height:5,
  weight:50
}
const {age,...other} = student;
console.log(age)
console.log(other)

console.log("//***************************/");

//spread operator
const obj1 = {a:10,b:20}
const obj2={c:30}
//clone obj1
const clone_obj={...obj1}
//combine obj1 and obj2
const obj3 = {...obj1,...obj2}
console.log(clone_obj)
console.log(obj3)




