// module.exports = {
//     userMdlwr:require ('./user.middleware'),
//     commonMdlwr:require ('./common.middleware'),
//     carMdlwr:require ('./car.middleware'),
//
// }

module.exports = {
    authMdlwr: require('./auth.middleware'),
    carMdlwr: require('./car.middleware'),
    commonMdlwr: require('./common.middleware'),
    userMdlwr: require('./user.middleware'),
};