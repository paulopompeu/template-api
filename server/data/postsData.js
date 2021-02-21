const db = require('../infra/database')

exports.getPosts = () => {
  return db.query('select * from blog.post')
}

exports.getPost = (id) => {
  return db.oneOrNone('select * from blog.post where id = $1', [id])
}

exports.savePost = (post) => {
  return db.one(`insert into blog.post ("title", "content") values ($1, $2) returning *`, [
    post.title,
    post.content,
  ])
}

exports.deletePost = (id) => {
  return db.none('delete from blog.post where id = $1', [id])
}

exports.updatePost = (id, post) => {
  return db.none('update blog.post set title = $1, content = $2 where id = $3', [
    post.title,
    post.content,
    id,
  ])
}
