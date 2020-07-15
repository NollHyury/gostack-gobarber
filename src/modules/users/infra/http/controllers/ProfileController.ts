import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({
      user_id: id,
    });

    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { name, email, password, old_password } = request.body;

    const createUser = container.resolve(UpdateProfileService);

    const user = await createUser.execute({
      name,
      email,
      password,
      old_password,
      user_id: id,
    });

    delete user.password;

    return response.json(user);
  }
}
