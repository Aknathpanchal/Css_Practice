

// console.log(columns)

var mens_data=JSON.parse(localStorage.getItem("mensData"))
console.log(mens_data)
var columns=document.createElement("div");
columns.setAttribute("class","columns")

var transfer=[]


mens_data.map(function(elem){

    var container=document.querySelector("#container")
    // var columns=document.createElement("div");
    // columns.setAttribute("class","columns")
    
    
    var items=document.createElement("div");
    items.setAttribute("class","items")
    columns.append(items)
    
    var content=document.createElement("div");
    content.setAttribute("class","content")
    
    var add_to_cart=document.createElement("button")
    add_to_cart.addEventListener("click",trans)

    function trans(){
        var datago=JSON.parse(localStorage.getItem("datatrans"))||[]
        var obj={
            url:elem.image_url,
            name:elem.name,
            price:elem.price,
            price2:elem.strikedoffprice

        } 
        datago.push(obj)
        localStorage.setItem("datatrans",JSON.stringify(datago))


        
    }
    add_to_cart.innerText="add to cart";
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
    
    // container.append(columns)
    

})
container.append(columns)