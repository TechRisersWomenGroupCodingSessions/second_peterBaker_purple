const cake = (recipe, ingredients) => {
    number_of_cakes = []
    for (item in recipe) {
        required_amount = recipe[item]
        available_amount = ingredients[item]
        number_of_cakes.push(Math.floor(available_amount/required_amount))
        // number_of_cakes = Math.floor(available_amount/required_amount)
    }
    return Math.min(number_of_cakes)
}

module.exports = cake