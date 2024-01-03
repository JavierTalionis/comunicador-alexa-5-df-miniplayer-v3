input.onButtonPressed(Button.A, function () {
    vol += 2
    dfplayermini.setVolume(vol)
})
input.onButtonPressed(Button.B, function () {
    vol += -2
    dfplayermini.setVolume(vol)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(vol)
})
let vol = 0
basic.showIcon(IconNames.StickFigure)
vol = 25
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(vol)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) < 1) {
        dfplayermini.playFile(1, dfplayermini.isRepeat.No)
        basic.showNumber(1)
    }
    if (pins.digitalReadPin(DigitalPin.P11) < 1) {
        dfplayermini.playFile(2, dfplayermini.isRepeat.No)
        basic.showNumber(2)
    }
    if (pins.digitalReadPin(DigitalPin.P16) < 1) {
        dfplayermini.playFile(3, dfplayermini.isRepeat.No)
    }
    if (pins.digitalReadPin(DigitalPin.P9) < 1) {
        dfplayermini.playFile(4, dfplayermini.isRepeat.No)
    }
    if (pins.digitalReadPin(DigitalPin.P8) < 1) {
        dfplayermini.playFile(5, dfplayermini.isRepeat.No)
    }
})
