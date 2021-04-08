const Users = require('../users/users-model.js')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(req.method, req.url, req.timestamp)
  next()
}

const validateUserId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  const user = await Users.getById(id)
  if (!user || Object.keys(user).length === 0) {
    return res.status(404).json({ message: "user not found" })
  }
  req.user = user
  next()
}



function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body || !req.body.name) {
    return res.status(400).json({ message: "missing required name field" })
  }
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body || !req.body.text) {
    return res.status(400).json({ message: "missing required text field" })
  }
  next()
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}