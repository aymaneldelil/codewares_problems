
////////////////// Steps /////////////////
/*
1- Create a Function 
2- create array = Slite the parameter(string) 
4- Make Condition
                *Check if array = its reverse
                *if true return true 
*/

function isPalindrome(string) {
  
    let arrayOfLetters = []
    arrayOfLetters = string.split("")
    if (arrayOfLetters.join("") == arrayOfLetters.reverse().join("")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome("dad"))