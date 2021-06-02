/* eslint-disable camelcase */
class UserModel {
  public readonly id?: string
  public email!: string
  public password_hash!: string
  public first_name!: string
  public last_name?: string
  public created_at?: Date
  public updated_at?: Date

  constructor (params: UserModel) {
    Object.assign(this, params)
  }
}

export default UserModel
