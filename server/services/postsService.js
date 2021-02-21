const postsData = require('../data/postsData')

exports.getPosts = () => {
  return postsData.getPosts()
}

exports.savePost = async (post) => {
  return await postsData.savePost(post)
}
