alert(`This is a tempertature converter, first choose if you're
coverting from celsius to farhenheit or farhenheit to celsius. Then
you wil enter the degree that you want to convert`)
 
function askName(){
   var name = prompt("What is your name?")
   return name
}
 
var name = askName();
 
function greeting(a) {
   alert(`Welcome ${a} to the temp converter`)
}
 
greeting(name)
 
function temp() {
   var conv = prompt("For celsius to farhenheit press 'f' and for farhenheit to celsius 'c'")
   return conv
}
 
var conv = temp();
 
function tempNum() {
   var convNum = Number(prompt("What is the number of degrees in celsius or farhenheit?"))
   return convNum
}
 
var convNum =  tempNum();
 
if (conv == "f") {
   function ctof() {
       var far = ((convNum * 9) / 5) + 32;
       return far
   }
   alert(ctof())
} else if (conv == "c") {
   function ftoc() {
       var cel = ((convNum - 32) * 5 / 9);
       return cel
   }
   alert(ftoc())
} else {
   alert("You suck at pressing f or c")
}
                                            
