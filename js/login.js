
var prodecteSigninEmail = document.getElementById('signinEmail')
var prodecteSigninPassword = document.getElementById('signinPassword')
var incorrect=document.getElementById('incorrect')
var prodecteList=[]
if(JSON.parse(localStorage.getItem('data'))!==null){
    prodecteList=JSON.parse(localStorage.getItem('data'))
}

function chackData(){
    var reuslt=false
    var ueserName=0
    for(i=0;i<prodecteList.length;i++ ){
        if(prodecteList[i].Email==prodecteSigninEmail.value&&prodecteList[i].Password==prodecteSigninPassword.value){
            reuslt=true
            ueserName=i
            break;
        }
       
    }

    if(reuslt){
        incorrect.classList.add('d-none')
        // alert(`welcom   ${ prodecteList[ueserName].name}`)
        localStorage.setItem("ueserName",JSON.stringify(prodecteList[ueserName].name))
       window.location.assign('/Assignment-1/home.html')
    }
    else{
        incorrect.classList.remove('d-none')
    }
}

// descInput.classList.add("d-none")
// incorrect.classList.remove('d-none')
