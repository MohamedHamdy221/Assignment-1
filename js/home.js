var prodectueserName=document.getElementById('prodectueserName')
var btn=document.getElementById('btn')
var ueserName;

if(JSON.parse(localStorage.getItem('ueserName'))!==null){
 ueserName=JSON.parse(localStorage.getItem('ueserName'))
}

prodectueserName.innerHTML=`Welcom ${ueserName}`

btn.onclick=function(){
    window.location.assign('/Assignment-1/index.html')
}
