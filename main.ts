input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
})
basic.showString("Hello!")
basic.showString("Press Button A or B")
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Yes)
})
