const { statusCodes } = require('../constants');
const {userService, s3Service, imageService} = require('../services');
const {User} = require('../dataBase');
const {ApiError} = require('../errors');

module.exports={

  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();

      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  getUserByID: (req, res, next) => {
    try {
      const { user } = req;

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try{
      // const hashPassword = await tokenService.hashPassword(req.body.password);
      // const user = await userService.createUser({...req.body, password: hashPassword});
      const user = await User.createUserWithHashPassword(req.body);
      res.status(statusCodes.CREATE).json(user);

    } catch (e) {
      next(e);
    }
  },

  deleteUserById: async (req, res, next) => {
    try{

      const { userId } = req.params;


      await userService.deleteUserById(userId);


      res.sendStatus(statusCodes.NO_CONTENT);

    } catch (e) {
      next(e);
    }
  },

  updateUserByID: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const user = await userService.updateUserByID(userId, req.body);

      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  uploadAvatar: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const data = await s3Service.uploadPublicFile(req.files.avatar, 'user', userId);

      await imageService.savePhotoInfo({
        image: data.Location,
        user: userId,
      });

      await User.updateOne({ _id: userId }, { avatar: data.Location });

      res.json(data);

    } catch (e) {
      next(e);
    }
  },

  getImages: async (req, res, next) => {
    try {
      const { userId } = req.params;

      const images = await imageService.getByUserId(userId);

      res.json(images);
    } catch (e) {
      next(e);
    }
  },

  deleteImages: async (req, res, next) => {
    try {
      const { imageId, userId } = req.params;
      const { avatar } = req.user;

      const imageInfo = await imageService.getById(imageId);

      if (!imageInfo) {
        return next(new ApiError('Image not found', statusCodes.BAD_REQUEST));
      }

      if (avatar === imageInfo.image) {
        const oldAvatar = await imageService.getByUserIdPreviousAvatar(userId);

        if (oldAvatar[0]) {
          await User.updateOne({ _id: userId }, { avatar: oldAvatar.image });
        } else {
          await User.updateOne({ _id: userId }, { avatar: '' });
        }
      }

      await Promise.all([
        s3Service.deleteFile(imageInfo.image),
        imageService.deleteImage({ _id: imageId }),
      ]);


      res.json();
    } catch (e) {
      next(e);
    }
  },
};
