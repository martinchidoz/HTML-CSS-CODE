jst.txt
//var header = document.getElementById("header");
////var newElement = document.createElement("button") //<button></button>
//newElement.innerHTML = "close"
//header.insertBefore(newElement, header.children[1])
//header.remove()
//newElement.setAttribute("class" ,"btnclass")
/*newElement.style.backgroundColor= "rgb(255,0,0)";
 newElement.style.margin = "2rem auto";
 newElement.style.display = "black";
 newElement.style.padding = "2rem";
 newElement.style.border = "none";*/
//header.append(newElement)

//console.log(header.children)

//document.body.append(newElement)
//console.log(document.body.children)

/*var newH1 = document.createElement("h1")
 newH1.innerHTML= "hello world"
 newH1.setAttribute("class", "btnclass")
 newH1.classList.add("btnclass", "anotherclass")
 newH1.classList
 var body = document.body
 body.insertBefore(newH1, body.children[2])*/
//document.getElementById("myemail").setAttribute("placeholder", "enter your email")
/*function handleSubmit() {
  var name = document.getElementById("myname").value
  var email = document.getElementById("myemail").value
  var pwd = document.getElementById("mypwd").value
  try {
    if(name== "" || email=="" || pwd==""){
    console.log("err")
  }
}catch (error) {
    console.log(error);
  }
}*/


/*var check = new Promise(function(onsuccess,onerror){
  fetch("https://randomuser.me/api/?results=10")
  .then ((res) => res.json())
  .then((res) => onsuccess(res))
  .catch((err) => onerror(err))
} 
)
 
check.then(function(res) {
  console.log(res)
},
function(err){
  console.log(err)
})*/
//function person(name,age){
 // return console.log(name +age)
//}
//person ("martin ",1)
//class Person {
////  constructor(name, gender){
 //   this. myname =nane;
 //   this. gender =gender;
//alert (a * b)
 // }
  
 // }

//new Person(5,7)
//new Person("seyi","a")
/*class Person{
  constructor(name, gender){
    this.myname = name;
    this.mygender = gender;

  }
     
  
  getInfo(){
    alert(`my name is ${this.myname} and i am a ${this.mygender}`)
  }
}
class Car extends Person{
  constructor(name, gender, mode1, year){
    super( name, gender)
    this.mymode1 = mode1
    this.myyear  = year
} 
getInfo(){
  alert(`${this.myname} bought ${this.mymode1} and is ${this.myyear} `)
}
}

const car1 =new Car("taiwo","female","camry", 2000)
const car2 = new Car("ebuka","male","audi", 2022)
//car2.getInfo()
const today = new Date().toDateString()
const data=prompt("enter your date of birth");

alert(data)*/
//person1.getInfo()

//alert(person2.myname)
 
/*class Car{
  constructor(carmake , carorigin){
    this.carmake = make;
    this.carorigin = origin;
  }
  }
  const car1 = new Car("ford", "usa")
  const car2 = new Car ("mercedez", "france")
  alert(car1.carmake)

  */
 
// function getAge(birthYear, birthMonth, birthDay) {
/* { var dob=prompt("enter your date of birth");
  var today = new Date();
  var birthDate = new Date(birthYear, birthMonth-1, birthDay );
  var age = today.getFullYear() -birthDate.getFullYear();
  var m = today.getMonth() -birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
    age--;
  }
  //const today = new Date().toDateString()
 // var dob=prompt("enter your date of birth");

  //return ( age);
// }
 alert ( age);*/

 /*var dob = prompt('enter your date of birth') ;
 var year =Number(dob.substr(0, 4));
var month =Number (dob.substr(4 ,2)) -1;
var day = Number (dob.substr(6,2));
var today = new Date();
var age = today.getFullYear()-year;
if (today.getMonth() < month || (today.getMonth()== month && today.getDate() < day)) {
  age--;
} alert (age);
*/

/*Date.prototype.getAge = function (date) {
  if (!date) date = new Date();
  return --((date.getFullYear() + date.getMonth()/100
  + date.getDate()/10000) - (this.getFullYear()+
  this.getMonth()/100 + this.getDate()/ 10000));
} */
/*const data =prompt("enter your date of - mm/dd/yy");
const today = new Date().getFullYear()
const age = today-new Date(data).getFullYear()
alert(age)*/

 //var date =new Date().getFullYear()

 $(document).ready(function()
  {var a =$(".navbar").offset().top;
$(document).scroll(function(){
  if($(this).scrollTop() >a)
  {
    $('.navbar').css({"background":"black"});
  } else {
    $('.navbar').css({"background":"none"});
  }

  });
});