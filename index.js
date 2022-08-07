const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];
let passwordlength=15;
let pwdgn1=document.getElementById("pwd1")
let pwdgn2=document.getElementById("pwd2")

function getrandomchar(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatepwd1(){
    let randomPassword = ""
    for (let i = 0; i < passwordlength ; i++) {
        randomPassword += getrandomchar()         
    }
    return randomPassword
}

console.log(generatepwd1())

function generatePwd(){
    let firstpwd=generatepwd1()
    pwdgn1.textContent=firstpwd;
    let secpwd=generatepwd1()
    pwdgn2.textContent=secpwd;
}