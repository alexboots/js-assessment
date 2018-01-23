exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // 1) 
    // let foundIndex = -1
    // arr.forEach((element, index) => {
    //   if(element === item) {
    //     foundIndex = index
    //   }
    // })

    // 2) 
    const testIndex = (element) => {
      return element === item
    }

    const foundIndex = arr.findIndex(testIndex)
    
    return foundIndex
  },

  sum: function(arr) {
    let sum = 0
    arr.forEach((element) => {
      sum += element
    })
    return sum
  },

  remove: function(arr, item) {
    const indexOfItem = arr.indexOf(item)
    let arrClone = arr.slice(0)

    if(indexOfItem !== -1) {
      arrClone.splice(indexOfItem, 1)
      return this.remove(arrClone, item)
    } else {
      return arrClone
    }
  },

  removeWithoutCopy: function(arr, item) {
    const indexOfItem = arr.indexOf(item)
    if(indexOfItem !== -1) {
      arr.splice(indexOfItem, 1)
      return this.removeWithoutCopy(arr, item)
    } else {
      return arr
    }
  },

  append: function(arr, item) {
    const cloneArr = arr.slice(0)
    cloneArr.push(item)
    return cloneArr
  },

  truncate: function(arr) {
    const cloneArr = arr.slice(0, arr.length - 1)
    return cloneArr
  },

  prepend: function(arr, item) {
    const cloneArr = arr.slice(0)
    cloneArr.unshift(item)
    return cloneArr
  },

  curtail: function(arr) {
    const cloneArr = arr.slice(0)
    cloneArr.shift()
    return cloneArr
  },

  concat: function(arr1, arr2) {
    // 1) 
    // const newArray = []
    // for(let element of arr1) {
    //   newArray.push(element)
    // }
    // for(let element of arr2) {
    //   newArray.push(element)
    // } 

    // 2)
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    const arrClone = arr.splice(0)
    arrClone.splice(index, 0, item)
    return arrClone
  },

  count: function(arr, item) {
    const foundElements = arr.filter((element) => element === item)
    return foundElements.length
  },

  duplicates: function(arr) {
    let duplicates = []
    let testArray = arr.slice()
    // remove element from cloned array, check to see if there is another instanec of it in the cloned array, and if there is, 
    // and it is not already in duplicates list, add it
    for(let element of arr) {
      testArray.splice(testArray.indexOf(element), 1)
      if(testArray.indexOf(element) !== -1 && duplicates.indexOf(element) === -1) {
        duplicates.push(element)
      }
    }

    return duplicates
  },

  square: function(arr) {
    const squaredArray = []
    for(let element of arr) {
      squaredArray.push(element * element)
    }
    return squaredArray
  },

  findAllOccurrences: function(arr, target) {
    let occurrences = []

    // 1)
    arr.forEach((element, index) => {
      if(element === target) {
        occurrences.push(index)
      }
    })

    return occurrences
  }
};
