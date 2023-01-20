
let  num="vasanth i am mathalam parai";
let count=0;
const vowels=['a','e','i','o','u'];

for(let s of num.toLowerCase()){
    if(vowels.includes(s)){
        count++;
    }
}
document.write(count);