let lastDirection = ""
let heading = 0
basic.showString("Calibrazione in corso...")
basic.pause(100)
basic.showString("...")
// Programma per una bussola sul micro:bit (Versione 1)
let directions = [
{ name: "N", min: 0, max: 22 },
{ name: "NE", min: 23, max: 67 },
{ name: "E", min: 68, max: 112 },
{ name: "SE", min: 113, max: 157 },
{ name: "S", min: 158, max: 202 },
{ name: "SW", min: 203, max: 247 },
{ name: "W", min: 248, max: 292 },
{ name: "NW", min: 293, max: 337 },
{ name: "N", min: 338, max: 360 }
]
basic.pause(100)
input.calibrateCompass()
basic.showString("Calibrazione terminata!")
basic.forever(function () {
    heading = input.compassHeading()
    let currentDirection = directions.find(direction =>
        heading >= direction.min && heading <= direction.max
    ).name;
if (currentDirection != lastDirection) {
        lastDirection = currentDirection
        // Usa un simbolo compatto per ogni direzione
        if (currentDirection == "N") {
            basic.showArrow(ArrowNames.North)
        } else if (currentDirection == "NE") {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (currentDirection == "E") {
            basic.showArrow(ArrowNames.East)
        } else if (currentDirection == "SE") {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (currentDirection == "S") {
            basic.showArrow(ArrowNames.South)
        } else if (currentDirection == "SW") {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (currentDirection == "W") {
            basic.showArrow(ArrowNames.West)
        } else if (currentDirection == "NW") {
            basic.showArrow(ArrowNames.NorthWest)
        }
    }
    basic.pause(100)
})
