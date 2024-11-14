import { MissileLaunchStatusEnum } from '../enums/MissileLaunchStatusEnum'


export interface MissileLaunch {
  rocketType: string
  timeToHit: number
  status: MissileLaunchStatusEnum
}