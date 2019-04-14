const errors = require('restify-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const auth = require('../auth');

module.exports = (server) => {

    /**
     * @api {post} /register Register a User
     * @apiGroup Users
     * 
     * @apiParam {String} userName A unique user name to be registered
     * @apiParam {String} password A password for the user to use to log in
     * 
     */
    server.post('/register',(req,res,next) => {

        const {userName,password} = req.body;

        const user = new User({
            userName,
            password
        });

        bcrypt.genSalt(10, (err,salt) => {

            if(err) return new errors.InternalError(err.message);

            bcrypt.hash(user.password, salt, async (err,hash) =>{

                if(err) return new errors.InternalError(err.message);

                user.password = hash;
                try {
                    const newUser = await user.save();
                    res.send(201);
                    next();
                } catch (err) {
                    return next(new errors.InternalError(err.message));
                }
            });
        });

    });

    /**
     * @api {post} /authenticate Authenticate a User
     * @apiGroup Users
     * 
     * @apiParam {String} userName
     * @apiParam {String} password
     */
    server.post('/authenticate', async (req,res,next) => {

        const { userName, password } = req.body;

        try {

            const user = await auth.authenticateUser(userName,password);

            const token = jwt.sign(user.toJSON(), config.JWT_SECRET, {expiresIn : '365d'});

            const {ait,exp} = jwt.decode(token);

            res.send({ait,exp,token});

            next();

        } catch (err) {
            return next(new errors.UnauthorizedError(err)); 
        } 

    });

};