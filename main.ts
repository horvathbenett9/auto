radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x_ertek = value
    } else if (name == "y") {
        y_ertek = value
    }
})
let jobb_kerek_sebesseg = 0
let bal_kerek_sebesseg = 0
let y_ertek = 0
let x_ertek = 0
radio.setGroup(90)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
x_ertek = 0
y_ertek = 0
basic.forever(function () {
    bal_kerek_sebesseg = y_ertek / x_ertek
    jobb_kerek_sebesseg = y_ertek - x_ertek
    RingbitCar.freestyle(bal_kerek_sebesseg, jobb_kerek_sebesseg)
})
