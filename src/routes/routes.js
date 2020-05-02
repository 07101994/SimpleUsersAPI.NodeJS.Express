import {getUser, getUserByID, addUser, updateUser, deleteUser} from '../controllers/userController'

const routes = (app) => {
    app.route('/users')
        .get((req, res, next) => {
            // fun with middlewares (play a little with it later)

            console.log(`request info: ${req.method}, ${req.originalUrl}`)
            next()

        }, getUser)

        .post(addUser)

    app.route('/users/:userID')
        .get(getUserByID)
        .put(updateUser)
        .delete(deleteUser)
}

export default routes