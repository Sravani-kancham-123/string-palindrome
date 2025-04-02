var str = "abi";
var newString = "";
for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]; 
}
if(newString==str) {
    console.log("palindrome")
} else {
    console.log("not a palindrome")
}