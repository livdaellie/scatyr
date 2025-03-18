basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Sad)
    } else if (true) {
        basic.showIcon(IconNames.Asleep)
    }
})
