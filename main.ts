input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numero_aleatorio = randint(0, 3)
    if (numero_aleatorio == 2) {
        basic.showString("SI")
    } else if (numero_aleatorio == 1) {
        basic.showString("NO")
    } else {
        basic.showString("NO SE")
    }
    basic.showNumber(8)
})
let numero_aleatorio = 0
basic.showString("Haz una pregunta")
basic.showNumber(8)
