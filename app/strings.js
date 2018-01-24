exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    console.log('str', str);
    console.log('amount', amount);
  },

  wordWrap: function(str, cols) {
    console.log('str', str);
    console.log('cols', cols);
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
