
var womensData=JSON.parse(localStorage.getItem("womensData"))
    console.log(womensData)
    
var columns=document.createElement("div");
    columns.setAttribute("class","columns")

womensData.map(function(elem){

    var container=document.querySelector("#container")
    
    var items=document.createElement("div");
    items.setAttribute("class","items")
    columns.append(items)
    
    var content=document.createElement("div");
    content.setAttribute("class","content")
    
    var add_to_cart=document.createElement("button")
    
    add_to_cart.innerText="add_to_cart";
    items.append(content,add_to_cart)
    
    var image=document.createElement("img");
    image.setAttribute("src",elem.image_url);
    var nam=document.createElement("p");
    nam.setAttribute("class","name")
    nam.innerText=elem.name
    
    var price1=document.createElement("p");
    price1.setAttribute("class","price1")
    price1.innerText=elem.price;
    var price2=document.createElement("p");
    price2.innerText=elem.strikedoffprice;
    price2.setAttribute("class","price2")
    
    content.append(image,nam,price1,price2)
    

})
container.append(columns)