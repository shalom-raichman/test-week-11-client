import { socket } from '../../../main'
import { MissileLaunchStatusEnum } from '../../../types/enums/MissileLaunchStatusEnum'
import {
  AreaEnum,
  OrgnizationsEnum,
} from '../../../types/enums/orgnizationEnum'
import { MissileLaunch } from '../../../types/models/missileLaunch.model'
import { IResource } from '../../../types/models/resource.model'

interface Props {
  resource: IResource
  area: AreaEnum
  organization: OrgnizationsEnum
}

const AmmoBtn = ({ resource, area, organization }: Props) => {
  const handelLaunch = () => {
    const missile_launch: MissileLaunch = {
      rocketType: resource.name,
      launchFrom: organization,
      launchTo: area,
      status: MissileLaunchStatusEnum.Launched,
    }
    socket.emit('missile_launch', missile_launch)
  }
  return (
    <div>
      <button className='btn btn-danger' onClick={handelLaunch}>
        {resource.name}: {resource.amount}
      </button>
    </div>
  )
}

export default AmmoBtn
