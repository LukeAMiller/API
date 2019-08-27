// const food=["BLT", "hamburger", "salad", "hot dog", "cheesecake"]

// food.forEach(fooditem => {
//     console.log(fooditem)
// })
// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
      
//           document.querySelector("#food").innerHTML += `<div class="flex"><h1 class="box">${food.name}</h1><p class="box">${food.category}</p><p class="box">${food.ethnicity}</p></div>`
//          }) 
//     })
fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
    let foodString = ""
    let buildHTMLstring = ""   
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property
     
            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.Barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    foodString = productInfo.product.ingredients_text
                    buildHTMLstring = `<div class="flex"> 
                    <h1 class="box">${food.name}</h1>
                    <p class="box">${food.category}</p>
                    <p class="box">${food.ethnicity}</p>
                    <p class="box">${foodString}</p>
                    </div>`
                    document.querySelector("#food").innerHTML += buildHTMLstring  
              })
      })
    })