console.log("HELLO WORLD");
let fs = require("fs");
fs.writeFile('welcome.txt','Hello Node',(err)=>{
    if(err){
        console.error(err);
    }
    console.log('file bon');
})
fs.readFile('welcome.txt',(err,data)=>{
    if(err){
        console.error(err)
    }
    console.log(`the program read ${data}`);
})
