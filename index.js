function forEach(array, callback) {
  let newArray = [...array]
  for (let i = 0; i < newArray.length; i++) {
    callback(newArray[i], i, array)
  }
}

function map(array, callback) {
  let newArray = []
  for (let variable of array) {
    newArray.push(callback(variable))
  }
  return newArray
}

function filter(array, callback) {
  let newArray = []
  for (let variable of array) {
    if (callback(variable) === true) {
      newArray.push(variable)
    }
  }
  return newArray
}

function every(array, callback) {
  for (item of array) {
    if (callback(item) === false) {
      return false
    }
  }
  return true
}

function some(array, callback) {
  for (item of array) {
    if (callback(item) === true) {
      return true
    }
  }
  return false
}

function majority(array, callback) {
  const majority = Math.floor((array.length / 2) + 1 )
  const newArray =[]
  for (item of array) {
    if (callback(item) === true) {
      newArray.push(item)
    }
  }
  if (newArray.length >= majority) {
    return true
  } else {
    return false
  }
}

function once(callback) {
  let isCalled = false
  let value;
  return function (arg) {
    if (isCalled) {
      return value
    }
    isCalled = true
    value = callback(arg)
    return value
  }
}

function groupBy(array, callback) {
  const object = {}
  for (item of array) {
    let key = callback(item)
    if (object[key]) {
      object[key].push(item)
    } else {
      object[key] = [item]
    }
  }
  return object
}

function arrayToObject(array, callback) {
  let object = {}
  for (item of array) {
    object[item] = callback(item)
  }
  return object
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
