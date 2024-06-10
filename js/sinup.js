var prodectName= document.getElementById('signinName')
var prodecteSigninEmail = document.getElementById('signinEmail')
var prodecteSigninPassword = document.getElementById('signinPassword')
var prodectBtn = document.getElementById('btnSignUp')
var incorrect =document.getElementById('incorrect')
var descInput=document.getElementById('descInput')
var regexName=/^[a-z]{3,10}$/
var regexEmail=/^[a-z]{3,10}@(gmail|yahoo).com$/
var regexPassword=/^[1-9]{8,15}$/


prodecteList=[]


if(JSON.parse(localStorage.getItem('data'))!==null){
    prodecteList=JSON.parse(localStorage.getItem('data'))
}

prodectBtn.onclick=function(){
    // addProdecte()
    chackGmail()
}

function chackGmail(){
    var found=false
    for( i=0;i< prodecteList.length; i++ ) {
        if(prodecteList[i].Email==prodecteSigninEmail.value){
            found=true
            break;
        }
    }

    if(found){
        descInput.classList.add("d-none")
        incorrect.classList.remove('d-none')
        clearForm()
    }
    else{
        addProdecte()
    }
}


function addProdecte(){

   if(regexName.test(prodectName.value)&&regexEmail.test(prodecteSigninEmail.value)&&regexPassword.test(prodecteSigninPassword.value)){
    var prodect={
    name:prodectName.value,
    Email:prodecteSigninEmail.value ,
    Password:prodecteSigninPassword.value,
    }
    prodecteList.push(prodect)
    localStorage.setItem('data',JSON.stringify(prodecteList))

    
    incorrect.classList.add("d-none")
    descInput.classList.remove("d-none")

    }

    else{
    descInput.classList.add("d-none")
    incorrect.classList.remove('d-none')
}
    clearForm()
}
function clearForm(){
    prodectName.value=null;
    prodecteSigninEmail.value=null;
    prodecteSigninPassword.value=null;
}