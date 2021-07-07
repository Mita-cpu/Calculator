//even and odd num using functions


function evenOrOdd() {
  let anumber = 12;
let answer = (anumber % 2);
  if (answer==0) {
    console.log ("Even");
  }else {
    console.log ("Odd");
  }
}
evenOrOdd();
//
function is_div_by_5(number) {
  if (number % 5 === 0) {
    console.log("True");
  } else {
    console.log("False");
  }
  
}
is_div_by_5(20);

//OR (Q)
function is_div_by_5() {
let aNumber=10
if (aNumber % 5 ===0) {
  console.log("True")
} else {
  console.log("False")
}
}
is_div_by_5()
//Return a larger number of the two values (Q)
function larger_number(num1, num2){
  if (num1 > num2) {
    return num1;
  }else if (num1 < num2) {
    return num2;
  } else {
    return "Numbers are eaqual";
  }
}
console.log(larger_number(8, 32))

//
let arr=[17,36];
result= Math.max(arr);
console.log(result);
//OR
let output= Math.max(28,12);
console.log(output);

//sTRING
function word_check(word) {
if(word.length > 6) {
   console.log ("long");
   } else if (word.length < 6) {
     console.log("Short");
   } else if (word.length ===6) {
     console.log("Medium");
   }else {
     console.log(word);
   }
  }
  word_check("Michelle");
//count e's (when i put gi it counts all e's, without it is says 1)

function count_e(word){

let str="I love chasing bees and beetles"
let myStr=str.match(/e/gi).length;

}


function either_only(number) {
  if (number % 3===0 && number % 5===0) {
    return "False";
  } else if (number % 3===0 || number % 5===0) {
    return "True";
  } else {
    return "False";
  }
}
console.log(either_only(15))

//homework two
 function count_a(word) {
   let count=0;
   let str=word.toString()
   for (let i=0; i<=word.length - 1; i++) {
     if (str.charAt(i) =="a" && str.charAt(i)=="A") {
       count+=1;
     }
   }
   return count;
 }
 console.log(count_a("what Are you today And everyday?"));

 //

 function count_vowels(word) {
   let counts=0;
   let string= word.toString()

   for (let her=0; her<= word.length - 1; her++){
     if (string.charAt(her) == "a" || string.charAt(her) == "e" ||string.charAt(her) == "i" || string.charAt(her) == "o" || string.charAt(her) == "u"){
       counts+=1;
     }

   }
   return counts;
 }
 console.log(count_vowels("How many vowels are in this string?"))
 //

 function sum_nums(max) {
   let sum=0
   for (let nums = 1; nums <= max; nums++){
     sum +=nums;
   }
   return sum;
  }
 console.log(sum_nums(50));

 //
 function factorial(num) {
  let product=1 ;
  for (let factor = 1; factor<= num; factor++){
    product *= 1;
  }
  return product;
 }
console.log(factorial(200));
//

function reverse(word) {
/*  let wordArr= word.split("");
  let reverseWordArray = wordArr.reverse();
  let reversedWord= reverseWordArray.join("")
  return reversedWord;
  */
 // OR YOU CAN CHAIN THEM
 return word.split("").reverse().join("");

}
console.log(reverse("Welcome"));
//
function goodbye(name) {
  
}