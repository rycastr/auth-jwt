import UserModel from '../../models/user-model'

export interface AddUserFieldValidador {
  validate: (
    input: Partial<Pick<UserModel, 'email' | 'first_name' | 'last_name'> & {
      password: string
    }>
  ) => Promise<Pick<UserModel, 'email' | 'first_name' | 'last_name'> & {
    password: string
  }>
}
