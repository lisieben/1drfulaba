def on_button_a():
    oledssd1306.clear_display()
    oledssd1306.init_display()
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    if 0 < randint(0, 5) and 2 > randint(0, 5):
        oledssd1306.write_string("Herz")
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
    if 1 < randint(0, 5) and 3 > randint(0, 5):
        oledssd1306.write_string("Stern")
    basic.show_leds("""
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        """)
    basic.show_leds("""
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        """)
    if 2 < randint(0, 5) and 4 > randint(0, 5):
        oledssd1306.write_string("Emoji")
        basic.show_icon(IconNames.HAPPY)
    if 3 < randint(0, 5) and 5 > randint(0, 5):
        oledssd1306.write_string("sonne")
        basic.show_leds("""
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # # . # #
            """)
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . # . # .
            . . # . .
            """)
    if randint(0, 5) == 5:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . # . # .
            . . # . .
            """)
        oledssd1306.write_string("Uhr")
input.on_button_event(Button.B, randint(0, 10), on_button_b)

def on_pin_touch_p0():
    basic.set_led_color(0xff0000)
    music.play_melody("C C5 C C5 C C5 C C5 ", 312)
    oledssd1306.write_string("Game Over")
    if not (input.pin_is_pressed(TouchPin.P0)):
        basic.set_led_color(0x00ff00)
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

oledssd1306.init_display()
oledssd1306.set_text_xy(3, 8)
oledssd1306.write_string("!!!GO!!!")