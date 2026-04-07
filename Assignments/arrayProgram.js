
const num = [3,1,4,5,6,3,9,3,6,80,3,3]
let length = num.length
let count =0

let find = 3

for(let i=0;i<=length-1;i++)
{
    if(num[i]==find)
    {
        count = count+1
    }
}

console.log("Number of times "+find+" present in array is : "+count)