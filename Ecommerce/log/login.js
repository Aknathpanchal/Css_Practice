document.querySelector("#form").addEventListener("submit",getdata)
var datas=JSON.parse(localStorage.getItem("data"))
// console.log(datas)
function getdata(event){
  
    event.preventDefault();
    var login=document.querySelector("#emails").value;
    var pass=document.querySelector("#password").value;
    var obj={
        login:login,
        pass:pass,
        n:"admin@gmail.com",
        p:"masai"
    }




   datas.map(function(elem){

    if(obj.login==n && obj.pass==n){
        alert("masai admin")
            }else {
                if(elem.email==obj.login && elem.password==obj.pass){
           alert("hello")
       }else{
        console.log("wrong")
       }
    }
   })
}

    
   
  
