function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(operator="*") {
  return function (title = "special") {
    return `You are ${operator}${title}${operator}!`
  }
}

let Calculator = {
  add: function add(n1, n2) {
    return n1 + n2
  },
  subtract: function subtract(n1, n2) {
    return n1 - n2
  },
  multiply: function multiply(n1, n2) {
    return n1 * n2
  },
  divide: function divide(n1, n2) {
    return n1 / n2
  }
}

function actionApplyer(num, array) {
  let result = num
  for (const func of array) {
    result = func(result)
    console.log(result)
  }
  return result
}

