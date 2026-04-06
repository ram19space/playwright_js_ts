
let word = "malayalam"

let len = word.length
console.log("Length of the string " +len)
let rev = ""

for (let i=len-1;i>=0;i--)
{
 rev = rev+word.charAt(i)

}
console.log(rev)
if(word===rev)
{
    console.log("Given string is palindrome : " +rev)
}
else{
    console.log("Given string is not palindrome:"+rev)
}
