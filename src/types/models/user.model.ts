import { IOrganization } from './organization.model'

export interface IUser {
  name: string
  password: string
  orgnization: IOrganization
}
