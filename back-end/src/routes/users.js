import { Router } from 'express';
import usersController from "../controllers/usersController";
import { catchAsync } from "../middlewares/errors";

export default () => {
  const api = Router();

  //POST /api/users
  api.post('/', catchAsync(usersController.create));

  //GET /api/users
  api.get('/', catchAsync(usersController.findAll));

  return api;
}