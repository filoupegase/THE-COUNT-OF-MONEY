const Users = require("../models/user");

exports.getUsers = () => {
  return Users.find({}, {password: 0, __v: 0});
}

exports.setUserAdmin = (id) => {
  if (Users.findOne({_id: id, roles: {$ne: "admin"}})) {
    return Users.findByIdAndUpdate(id, {$push: {roles: "admin"}}, {new: true});
  }
  return null;
}

exports.removeUserAdmin = (id) => {
  return Users.findByIdAndUpdate(id, {$pull: {roles: "admin"}}, {new: true});
}

exports.deleteUser = (id) => {
  return Users.findByIdAndRemove(id);
}