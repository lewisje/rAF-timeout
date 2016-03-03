~function() {
    const oldSetTimeout = window.setTimeout
    // fires the given fn on the nearest following animation frame.
    window.setTimeout = function(fn, timeout) {
        oldSetTimeout.call(window, () => requestAnimationFrame(fn), timeout)
    }

    const oldSetInterval = window.setInterval
    // fires the given fn on the nearest following animation frame.
    window.setInterval = function(fn, interval) {
        oldSetInterval.call(window, () => requestAnimationFrame(fn), interval)
    }
}()
