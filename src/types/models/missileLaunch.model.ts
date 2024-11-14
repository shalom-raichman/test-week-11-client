import { MissileLaunchStatusEnum } from '../enums/MissileLaunchStatusEnum'
import { AreaEnum, OrgnizationsEnum } from '../enums/orgnizationEnum'


export interface MissileLaunch {
  rocketType: string
  timeToHit?: number
  status: MissileLaunchStatusEnum
  launchFrom : OrgnizationsEnum,
  launchTo: AreaEnum
}
