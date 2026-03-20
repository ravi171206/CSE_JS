// let promise = new Promise((resolve,reject)=>{
//     let success = true
// })
//error handling
// try{
//     var x= y +10;
// }
// catch(error){
//     console.log("error");
// }

//store object:
var user ={name:"jeet",age:50
};
localStorage.setItem("user",JSON.stringify(user));
//retrive object
var data = JSON.parse(localStorage.getItem("user"));
console.log(data.name,data.age);