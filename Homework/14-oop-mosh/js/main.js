// // factory function
// function createCircle(radius){
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     }
// }

// const circle = createCircle(1)

// // constructor function
// function Circle(radius){
//     this.radius = radius
//     this.draw = function(){
//         console.log('draw')
//     }
// }
// const another = new Circle(1)

// let x = {}
// let x = new Object()

function Stopwatch(){
    let startTime, endTime, running, duration = 0

    this.start = function(){
        if (running)
            throw new Error('Stopwatch has already started')

        running = true
    
        startTime = new Date()
    }

    this.stop = function(){    
        if (!running)
            throw new Error('Stopwatch is not started')

        running = false

        endTIme = newDate()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function(){
        startTime = null
        endTime = null
        running = false
        dutation = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    })
}