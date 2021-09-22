const User = require('mongoose').model('User');

async function getUserByUsername(username) {
    const user = await User.findOne({'username': username}).exec();
    return user?.toObject();
}

module.exports = {
    getUserByUsername
}
