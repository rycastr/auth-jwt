import UserModel from '../../models/user-model'

export interface AddUserRepository {
  add: (
    input: UserModel
  ) => Promise<UserModel | undefined>
}
