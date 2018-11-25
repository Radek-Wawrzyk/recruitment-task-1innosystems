import Users from '../models/user';

export default {
  async create(req, res, next) {
    const user = await Users.create(req.body);

    return res.status(200).send({data: user, message: `User was saved`});
  },

  async findAll(req, res, next) {
    const users = await Users.find();

    return res.status(200).send({data: users});
  }
}