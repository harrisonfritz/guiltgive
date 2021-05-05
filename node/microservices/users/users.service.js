const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database/database');  
const config = require('../../config.json');
const User = db.User;
module.exports = {
    getUsers,
    addUser,
    deleteUser,
    authenticate
}

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        console.log( {
            ...userWithoutHash,
            token
        })
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getUsers(){
console.log('getting user')
return await User.find()
}

async function addUser(userParam){
    // validate
    console.log(userParam)
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }
    else  if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();

}

async function deleteUser(){
console.log('deleting user')
}