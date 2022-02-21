const dummy = (blogs) => {
  let testingTesting = blogs.length / blogs.length
  return blogs.length === 0
  ? 1 
  : testingTesting
  }

const totalLikes = (blogs) => {
  let initialValue = 0
  let sum = blogs.reduce(
      (previousValue, currentValue) => previousValue + currentValue.likes
      , initialValue
  )
  return sum
  }

  module.exports = {
    dummy,
    totalLikes
  }