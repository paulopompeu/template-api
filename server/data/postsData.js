const db = require('../infra/database')

exports.getPosts = async () => {
  return await db.query('select * from blog.post')
}

exports.savePost = (post) => {
  console.log('post')
  console.log(post)
  return db.one(
    // 'insert into blog.post (title, content) values ($1, $2) returning *',
    `insert into blog.post ("title", "content") values ($1, $2) returning *`,
    [post.title, post.content]
  )
}
