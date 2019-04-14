const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.authenticateUser = (userName,password) => {
    return new Promise( async (resolve, reject) => {
        try {

            const user = await User.findOne({ userName });

            bcrypt.compare(password,user.password, (err,isMatch) => {

                if(err) reject(err);
                if(!isMatch) reject ("Authentication Failed");
                resolve(user);

            });

        } catch (err){
            reject("Authentication Failed");
        }
    });
};
