const Blog = require('../models/blog')

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

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}
  
module.exports = {
  dummy,
  totalLikes,
  blogsInDb
}