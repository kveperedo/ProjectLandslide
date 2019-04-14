module.exports = {
    ENV : process.env.NODE_ENV || 'development',
    PORT : process.env.PORT || 3000,
    URL : process.env.BASE_URL || 'http://localhost:3000',
    JWT_SECRET : process.env.JWT_SECRET || 'usersercret',
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb+srv://kveperedo:bigmanboy@cluster0-e11zw.mongodb.net/test?retryWrites=true'
}