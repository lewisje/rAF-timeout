~function(window) {
    const oldSetTimeout = window.setTimeout
    window.setTimeout = function setTimeout(fn, timeout) {
        return oldSetTimeout.call(window, () => requestAnimationFrame(fn), timeout)
    }

    const oldSetInterval = window.setInterval
    window.setInterval = function setInterval(fn, interval) {
        return oldSetInterval.call(window, () => requestAnimationFrame(fn), interval)
    }
}(window)
