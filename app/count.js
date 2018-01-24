exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout
    let count = start
    
    function tick () {
      if (count <= end) {
        console.log(count)
        count += 1
        timeout = setTimeout(tick, 100)
      }
    }

    tick()

    function cancel() {
      clearTimeout(timeout)
    }

    return { cancel }
  }
};
