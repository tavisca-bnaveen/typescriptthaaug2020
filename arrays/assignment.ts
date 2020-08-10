let example: string;
example="Create string with following value TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
let split_array=example.split('.');
let org="";
split_array.forEach((stat)=>{
    if(stat.length!=0){
        stat=stat.trim();
        let first=stat.charAt(0).toLocaleUpperCase();
        org+=first+stat.substr(1,stat.length-1)+". ";
    }

})
console.log(org.trim());
var hash_char={};
var hash_string={}
let capitize="";
let split_chars=example.split(" ");
split_chars.forEach((ex_char)=>{
    for(let i=0;i<ex_char.length;i++){
        hash_char[ex_char[i]] = hash_char[ex_char[i]] ? hash_char[ex_char[i]] + 1 : 1;
    }
    hash_string[ex_char] = hash_string[ex_char] ? hash_string[ex_char] + 1 : 1;
    
    capitize+=ex_char.charAt(0).toLocaleUpperCase()+ex_char.substr(1,ex_char.length-1)+" ";
})
console.log(JSON.stringify(hash_char));
console.log(JSON.stringify(hash_string));
console.log(capitize.trim());

