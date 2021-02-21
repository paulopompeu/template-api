const Bottleneck = require('bottleneck')

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 200,
  highWater: 30,
  strategy: Bottleneck.strategy.BLOCK,
})

const bottleneckPolicy = async (...args) => {
  const [req, res, next] = args
  try {
    await limiter.schedule(() => Promise.resolve(next()))
  } catch (err) {
    return res.status(429).send({ message: 'Rate limit exceeded' })
  }
}

module.exports = {
  bottleneckPolicy,
}
