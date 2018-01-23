exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value)
  },  

  manipulateRemoteData: function(url) {
    async function getData() { 
      return await $.get(url, function(data) {  return data })
    }

    return getData().then(data => {
      const { people } = data
      let names = people.map(person => person.name)
      return names.sort()
    })
  }
};
// 