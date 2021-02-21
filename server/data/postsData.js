const db = require('../infra/database')

exports.getPosts = async () => {
  return await db.query('select * from blog.post')
}

exports.savePost = (post) => {
  return db.one(
    `insert into blog.post ("title", "content") values ($1, $2) returning *`,
    [post.title, post.content]
  )
}

exports.deletePost = (id) => {
	return db.none('delete from blog.post where id = $1', [id])
}
