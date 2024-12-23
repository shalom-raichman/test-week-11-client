import { useAppSelector } from '../../redux/store'
import { MissileLaunchStatusEnum } from '../../types/enums/MissileLaunchStatusEnum'
import { MissileLaunch } from '../../types/models/missileLaunch.model'
import InterceptionBtn from './Intrcptors/InterceptionBtn'

interface Props {
  launch: MissileLaunch
}

const TableRow = ({ launch }: Props) => {
  const user = useAppSelector((s) => s.user.user)
  return (
    <tbody>
      <tr>
        <td>{launch.rocketType}</td>
        <td>{launch.timeToHit}</td>
        <td>{launch.launchFrom}</td>
        <td>{launch.launchTo}</td>
        <td>
          {launch.status}
          {user.orgnization.name.split(' ')[0] === 'IDF' &&
            launch.status == MissileLaunchStatusEnum.Launched && (
              <InterceptionBtn _id={launch._id as string} />
            )}
        </td>
      </tr>
    </tbody>
  )
}

export default TableRow
