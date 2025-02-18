let gener=require("generate-password");
let password=gener.generate({
    length:15,
    numbers:true,
    symbols:true
});
console.log(password);