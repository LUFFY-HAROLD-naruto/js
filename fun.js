//class1
console.log("i like fufu");
console.log("i")
//this a comment
/*
 this 
 is 
 a 
 multiline
 comment
 */
//class2
 // a veriable is a container for storing data
 // a variable behaves as if it was the value that it contains

 //Two step:

 //1.Declaration (var,let,const)
 //2.Assigment ( =Assigment operator)
 
 //number data type
 let age;
 age=21
 age=age+5
 console.log("you are", age, "years old");

 //text data type
 let firstname;
 firstname ="def"
 console.log(firstname);

 //boolen data type
 let student= true;
 console.log(student);

 //how to change the inner code of and html
 document.getElementById("p1").innerHTML = "hello " + firstname ;

 //class3

 /*
   arithematic expression is the of .....
   operands (values,variables,etc.)
   operators (+ - * / %)
   that can be evaluated to a value 
   y= x + 5;
   */

   let students =20;
   students = students + 1;
   /*
   opration proceduces
   1.parenthesis ()
   2.Expionent
   3.multiplication & division
   4.addition & subtractoin
   */

   let result = (1 +2)*7
   console.log(result);

   //class4

   //how to accept user
    //easy way with a window prompt
    let username=window.prompt("what your name");
    console.log(username);
    
    //difficult way html text box

    let username;

    document.getElementByid("myButton").onclick = function(){
          username = document.getElementByid("mytext").value;
          console.log(username);
    }
    
