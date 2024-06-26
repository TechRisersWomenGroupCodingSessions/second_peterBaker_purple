const cake = (recipe, ingredients) => {
    number_of_cakes = 0
    for (item in recipe) {
        required_amount = recipe[item]
        available_amount = ingredients[item]
        number_of_cakes = Math.floor(available_amount/required_amount)
    }
    return number_of_cakes
}

module.exports = cake