const User = require('../dataBase/User');

module.exports = {

  getAllUsers(filter = {}) {
    return User.find(filter);
  },

  getOneByParams(filter){
    return User.findOne(filter);
  },

  getOneById(id){
    return User.findById(id).select(['+cars'])
      .populate('cars');
  },

  updateUserByID(userId, newUserObject) {
    return User.findOneAndUpdate({ _id: userId }, newUserObject, { new: true });
  },

  deleteUserById(userId){
    return User.deleteOne({_id:userId});
  }
};
