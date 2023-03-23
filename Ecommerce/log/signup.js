var main=document.getElementById("myform");
main.addEventListener("submit",getdata)
var data=JSON.parse(localStorage.getItem("data"))||[]
function getdata(event){
    // event.preventDefault();
 
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#emails").value;
    var mobile=document.querySelector("#mobile").value;
    var password=document.querySelector("#password").value;

    var dataobj={
        name:name,
        email:email,
        mobile:mobile,
        password:password
    }
    data.push(dataobj)
    localStorage.setItem("data",JSON.stringify(data))
}

