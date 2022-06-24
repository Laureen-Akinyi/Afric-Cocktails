document.addEventListener("DOMContentLoaded", getCocktails)

const details = document.querySelector(".details")
const text = document.getElementById("text")

function getCocktails(){

    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then((response) => response.json())
    .then(data => {
            
            for (let i = 10; i < data.drinks.length; i++) {
                // console.log(data.drinks[i]);
              
                // console.log(data.drinks[i])
                let p = document.createElement("p")
                p.innerHTML = data.drinks[i].strDrink
                details.appendChild(p)

                let img = document.createElement("img")
                img.src = data.drinks[i].strDrinkThumb
                details.append(img)

              
            }
            
            // console.log(data.drinks[0]);
        
    })
}

