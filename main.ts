let item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
item.setBrightness(255)
item.showRainbow(1, 360)
item.show()
basic.pause(500)
basic.forever(function () {
    item.rotate(1)
    item.show()
    basic.pause(500)
})
