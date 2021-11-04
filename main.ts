function 燈數 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    b = 0
    for (let index = 0; index < 17; index++) {
        b += 1
        燈數_2(b - 1, false)
        if (b > 16) {
            b = 1
        }
        燈數_2(b, true)
        basic.pause(200)
    }
})
function 燈數_3 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    }
    if (num > 17) {
        c = 0
    }
    if (num < 6) {
        x = 0 - 0
        y = 0
    } else if (false) {
    	
    } else {
    	
    }
    led.plot(y, x)
}
function 燈數_2 (num: number, 亮燈: boolean) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        x = 0
        y = 17 - num
    }
    if (亮燈 && true) {
        led.plot(y, x)
    } else {
        led.unplot(y, x)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    c = 0
    for (let index = 0; index < 16; index++) {
        c += 1
        燈數(c)
        basic.pause(100)
    }
})
let c = 0
let b = 0
let y = 0
let x = 0
basic.clearScreen()
let a = 0
basic.forever(function () {
    a += 1
    燈數(a)
    basic.pause(100)
})
