import { NextFunction, Request, Response } from "express";
import { UserService } from "../../../services";

class UserController {
  public fetchUserProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { accessToken } = req.session;
      const response = await UserService.fetchUserProfile(accessToken);
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  };
}

export default new UserController();
