input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    oledssd1306.clearDisplay()
    oledssd1306.initDisplay()
})
input.onButtonEvent(Button.B, randint(0, 10), function () {
    if (0 < randint(0, 5) && 2 > randint(0, 5)) {
        oledssd1306.writeString("Herz")
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    if (1 < randint(0, 5) && 3 > randint(0, 5)) {
        oledssd1306.writeString("Stern")
    }
    basic.showLeds(`
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        `)
    if (2 < randint(0, 5) && 4 > randint(0, 5)) {
        oledssd1306.writeString("Emoji")
        basic.showIcon(IconNames.Happy)
    }
    if (3 < randint(0, 5) && 5 > randint(0, 5)) {
        oledssd1306.writeString("sonne")
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # . # .
            . . # . .
            `)
    }
    if (randint(0, 5) == 5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # . # .
            . . # . .
            `)
        oledssd1306.writeString("Uhr")
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0000)
    music.playMelody("C C5 C C5 C C5 C C5 ", 312)
    oledssd1306.writeString("Game Over")
    if (!(input.pinIsPressed(TouchPin.P0))) {
        basic.setLedColor(0x00ff00)
    }
})
oledssd1306.initDisplay()
oledssd1306.setTextXY(3, 8)
oledssd1306.writeString("!!!GO!!!")
