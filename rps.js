function getCompMove () {
    let number = Math.random()
        if (number < 0.34)  {
            return 'rock'
        } else if (number < .67) {
            return 'paper '
        } else {
            return 'scissors'
        }
}
