export function printStore() {
    
    // Array of Objects

let products = [
    {name:"Toyota 4RUNNER",price:350000000,image:'../img/imgStoreProducts/4runner.png',description:"Camioneta Toyota 4RUNNER 2023"},
    {name:"Toyota Prado TX",price:150000000,image:'../img/imgStoreProducts/PradoTX.png',description:"Camioneta Toyota Prado TX 2023"},
    {name:"Toyota Prado TXL",price:180000000,image:'../img/imgStoreProducts/PradoTXL.png',description:"Camioneta Toyota Prado TXL 2023"},
    {name:"Toyota Hilux",price:90000000,image:'../img/imgStoreProducts/HILUX.png',description:"Pick up Toyota Hilux"},
    {name:"Toyota Fortuner",price:250000000,image:'../img/imgStoreProducts/Fortuner.png',description:"Camioneta Toyota Fortuner"},
    {name:"Toyota Land Cruiser 300",price:430000000,image:'../img/imgStoreProducts/LandCruiser300.png',description:"Camioneta Toyota Land Cruiser 300"},
    {name:"Toyota Corolla",price:80000000,image:'../img/imgStoreProducts/Corolla.png',description:"Automovil Toyota Corolla"},
    {name:"Toyota Yaris Crosss",price:120000000,image:'../img/imgStoreProducts/YarisCross.png',description:"Camioneta Toyota Yaris Cross"},
    {name:"Toyota Corolla Cross",price:150000000,image:'../img/imgStoreProducts/COROLLACROSS.png',description:"Camioneta Toyota Corolla Cross"},
    {name:"Toyota Rav4",price:310000000,image:'../img/imgStoreProducts/RAV4.png',description:"Camioneta Toyota Rav4"},
]

// Create Reference to fatherComponente

let row=document.getElementById("row.")


// get array items in JS

products.forEach(function(product){
   // console.log(product.price)

    // Print width JS

    //Estructure

    //Creating column
    let column=document.createElement("div")
    column.classList.add("col")
    //Creating card
    let card=document.createElement("div")
    card.classList.add("card")
    card.classList.add("h-100")
    //Creating image
    let image=document.createElement("img")
    image.classList.add("card-img-top")
    image.src=product.image

    //
    let title=document.createElement("h4")
    title.classList.add("text-center")
    title.textContent=product.name
    

    //
    let button=document.createElement("button")
    button.setAttribute("type","button")
    button.classList.add("btn","btn-info","mx-4","mb-5")
    button.textContent="Ver producto"
    


    //Order

    card.appendChild(image)
    card.appendChild(title)
    card.appendChild(button)

    column.appendChild(card)
    row.appendChild(column)

    //



})//ForEach

}

