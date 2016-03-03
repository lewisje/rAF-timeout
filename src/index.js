~function() {
    const global = this

    const oldSetTimeout = global.setTimeout
    global.setTimeout = function(fn, timeout) {
        oldSetTimeout.call(global, () => requestAnimationFrame(fn), timeout)
    }

    const oldSetInterval = global.setInterval
    global.setInterval = function(fn, interval) {
        oldSetInterval.call(global, () => requestAnimationFrame(fn), interval)
    }
}()
