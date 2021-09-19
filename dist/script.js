//PART I

//1
function difference(num1, num2){
  return num1 - num2;
}

//2
function product(num1, num2){
  return num1 * num2;
}

//3
function printDay(num){
let daysOfTheWeek = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
};
return daysOfTheWeek[num];
}

//4
function lastElement(arr){
  return arr[arr.length-1];
}

//5
function numberCompare(num1, num2){
if(num1 > num2){
    return "First is greater";
} else if(num1 < num2){
    return "Second is greater";
} else if(num1 === num2){
    return "Numbers are equal";
    }
}

//6
function singleLetterCount(str1, letter){
  let finalCount = 0;
  for(let i=0; i< str1.length; i++){
    if(str1[i].toLowerCase() === letter.toLowerCase()){
      finalCount++;
    }
  }
  return finalCount;
}

//PART 2

//7
function multipleLetterCount(str){
  let finalObj = {};
  for(let i =0; i< str.length; i++){
    if (!(str[i] in finalObj)){
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}

//8
function arrayManipulation(arr, command, location, val){
  if(command === 'remove'){
    if(location === 'end'){
      return arr.pop();
    }
if(command === 'remove'){
    if(location === 'beginning'){
      return arr.shift();
    }
if(command === 'add'){
    if(location === 'beginning'){
      return arr.unshift(val);
    }
if(command === 'add'){
    if(location === 'end'){
      return arr.push(val);
                }
            }
        }
    }
  }
}

//9
function isPalindrome(str){
  for(let i =0; i < str.length/2; i++){
    if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
       return false;
     }
   }
  return true;
}

//PART 3