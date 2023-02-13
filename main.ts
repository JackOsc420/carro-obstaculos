let distancia = 0
basic.showString("Hello!")
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Orange))
    robotbit.rgb().show()
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distancia < 10) {
        robotbit.MotorStopAll()
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -50,
        robotbit.Motors.M1A,
        -50
        )
        basic.pause(100)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -50,
        robotbit.Motors.M1A,
        50
        )
        basic.pause(100)
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        100,
        robotbit.Motors.M1A,
        100
        )
    }
})
