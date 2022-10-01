
console.log("This is a Strong password Generator  in the file")
const Generator=document.getElementById("generate");
const copy=document.getElementById("copy");


function getPassword(){
    var chars='0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*)(ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordLength=12;
    var password="";
    for(let i=0;i<passwordLength;i++){
        var randomNumber=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber,randomNumber+1);
        document.getElementById("password").value=password;
    }
    console.log(password)
}


Generator.addEventListener("click", ()=>{

    getPassword();

})
copy.addEventListener("click",()=>{
   var copyText=document.getElementById("password");
    copyText.select()
    copyText.setSelectionRange(0,999);
    (document.execCommand('copy'))


})