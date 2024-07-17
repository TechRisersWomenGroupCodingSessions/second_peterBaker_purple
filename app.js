const cake = (recipe, ingredients) => {
    number_of_cakes = []
    for (item in recipe) {
        required_amount = recipe[item]
        available_amount = 0;
        if (item in ingredients) {
            available_amount = ingredients[item]
        }
        number_of_cakes.push(Math.floor(available_amount/required_amount))
    }
    console.log(number_of_cakes)
    min_number_of_cakes = Math.min(...number_of_cakes)
    console.log(min_number_of_cakes)
    console.log(isNaN(min_number_of_cakes))
    if (isNaN(min_number_of_cakes)) {
        console.log("I got here")

        throw new Error("custom error");
        
    } else {
        return min_number_of_cakes
    }
}

module.exports = cake