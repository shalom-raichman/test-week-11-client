import { OrgnizationsEnum } from '../enums/orgnizationEnum'
import { IResource } from './resource.model'

export interface IOrganization {
  name: OrgnizationsEnum
  resources: IResource[]
  budget: number
}
