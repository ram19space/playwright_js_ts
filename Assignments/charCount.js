
let word ="Ganesan"

let count =0
let len = word.length
for(let i=0;i<=len-1;i++)
{
    if(word.charAt(i)=="e")
    {
        count=count+1
    }
    
}
console.log(count)