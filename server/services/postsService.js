const postsData = require('../data/postsData')

exports.getPosts = () => {
  return postsData.getPosts()
}

exports.getPost = (id) => {
  return postsData.getPost(id)
}

exports.savePost = async (post) => {
  return await postsData.savePost(post)
}

exports.deletePost = async (id) => {
  return await postsData.deletePost(id)
}

exports.updatePost = async (id, post) => {
  return await postsData.updatePost(id, post)
}
