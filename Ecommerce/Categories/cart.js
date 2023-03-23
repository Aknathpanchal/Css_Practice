var data=JSON.parse(localStorage.getItem("datatrans"));

console.log(data[0].price+2)


var columns=document.createElement("div");
columns.setAttribute("class","columns")
data.map(function(elem){

    var container=document.querySelector("#container")
    // var columns=document.createElement("div");
    // columns.setAttribute("class","columns")
    
    
    var items=document.createElement("div");
    items.setAttribute("class","items")
    columns.append(items)
    
    var content=document.createElement("div");
    content.setAttribute("class","content")
    
    
    items.append(content)
    
    var image=document.createElement("img");
    image.setAttribute("src",elem.url);
    var nam=document.createElement("p");
    nam.setAttribute("class","name")
    nam.innerText=elem.name
    
    var price1=document.createElement("p");
    price1.setAttribute("class","price1")
    price1.innerText=elem.price;
    var price2=document.createElement("p");
    price2.innerText=elem.price2;
    price2.setAttribute("class","price2")
    
    content.append(image,nam,price1,price2)
    
    // container.append(columns)
    

})
container.append(columns)