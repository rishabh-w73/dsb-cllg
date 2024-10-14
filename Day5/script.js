// function display() {
//   alert("js running");
// }
// display();

// let x = 14;
// let y="hello";
// let z=true;
// let obj={
//     'name' : 'Rahul',
//     id : 12
// }
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(typeof obj);

// let ar = [12, 2, 3, 4, 4];
// console.log(typeof ar);
// let a;
// let b=null;
// console.log(typeof a);
// console.log(typeof b);

// function validate() {
//   let un = document.getElementById("un").value;
//   let pass = document.getElementById("pass").value;
//   //   alert(un);
//   if (un == "admin" && pass == "admin")
//     document.getElementById("res").innerHTML = "Login Success";
//   else document.getElementById("res").innerHTML = "Login Failed";
// }

// let x=Number("22");
// let str=Number("123");
// // console.log(typeof x);
// // console.log(typeof str);
// console.log(x+str);
// let x2="22";
// let str2="11";
// console.log(x2%str2);
// let a = 12;
// let b = "12";
// console.log(a == b);
// console.log(a === b);

//Arrow Function

// let a=(x,y)=>{
//     console.log(x+y);
// };

// a(12,34);

// let a = (x, y) => {
//   return x + y;
// };

// let x = a(12, 34);
// console.log(x);

// let say=()=> alert("what");
// say();

// let says=()=> console.log("hello");
// says();

function display(){
    let p1 = document.querySelector("p");
    p1.innerHTML = "Result";
    p1.style.backgroundcolor='red';
}