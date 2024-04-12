const UserRouter = require('./UsersRouter')


const routes = (app) => {
    app.use('/api/user', UserRouter)
  
}

module.exports = routes