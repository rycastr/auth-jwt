
import UserModel from '../models/user-model'
import { AddUserFieldValidador } from './contracts/add-user-field-validator'
import { AddUserRepository } from './contracts/add-user-repository'
import { Hasher } from './contracts/hasher'
import { SignToken } from './contracts/sign-token'

class AddUserService {
  constructor (
    private readonly addUserFieldValidator: AddUserFieldValidador,
    private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
    private readonly signToken: SignToken
  ) {}

  public async execute (input: Partial<Pick<UserModel,
    'email' | 'first_name' | 'last_name'> & { password: string }>): Promise<{
      accessToken: string
    }> {
    const inputValidated = await this.addUserFieldValidator.validate(input)

    const passwordHash = await this.hasher.hash(inputValidated.password)

    const user = await this.addUserRepository.add({
      email: inputValidated.email,
      password_hash: passwordHash,
      first_name: inputValidated.first_name,
      last_name: inputValidated.last_name
    })

    const token = await this.signToken.sign({ id: user?.id })

    return {
      accessToken: token
    }
  }
}

export default AddUserService
