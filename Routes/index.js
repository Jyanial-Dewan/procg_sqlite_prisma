const Router = require("express");
// const userRoutes = require("../Routes/userRoutes")
// const messageRoutes = require("../Routes/messageRoutes")
const defPersonsRoutes = require("../Routes/defPersonsRoutes");
const defTenantsRoutes = require("../Routes/defTenantsRoutes");
const defUsersRoutes = require("../Routes/defUsersRoutes");
const defUserCredentialsRoutes = require("../Routes/defUserCredentialsRoutes");
const authenticationRoutes = require("../Routes/authRoutes")

const routes = Router();

// routes.use('/users', userRoutes);
// routes.use('/messages', messageRoutes);
routes.use('/persons', defPersonsRoutes);
routes.use('/tenants', defTenantsRoutes);
routes.use('/users', defUsersRoutes);
routes.use('/user-credentials', defUserCredentialsRoutes);
routes.use('/login', authenticationRoutes)

module.exports = routes;