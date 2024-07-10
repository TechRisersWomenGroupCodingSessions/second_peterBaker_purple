const cake = (recipe, ingredients) => {
    number_of_cakes = []
    for (item in recipe) {
        required_amount = recipe[item]
        available_amount = 0;
        if (item in ingredients) {
            available_amount = ingredients[item]
        }
        console.log(item)
        console.log(available_amount)
        console.log(required_amount)
        number_of_cakes.push(Math.floor(available_amount/required_amount))
    }
    console.log(".....")
    return Math.min(...number_of_cakes)
}

module.exports = cake