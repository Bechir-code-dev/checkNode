let gener=require("generate-password");
let password=gener.generate({
    length:10,
    numbers:true
});
console.log(password);