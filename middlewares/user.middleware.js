const {ApiError} = require('../errors');

module.exports = {
    checkIfUserBodyIsValid : async (req,res,next) => {
        try {
            const { age, name } = req.body;

            if (Number.isNaN(+age) || age <= 0) {
                throw new ApiError('Wrong user age', 400 )

            }
            if (name.length < 2) {
                throw new ApiError('Wrong user name', 400 )

            }
            next();
            
        }catch (e) {
            next(e);
        }
    }
}