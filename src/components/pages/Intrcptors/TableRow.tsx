import { MissileLaunch } from '../../../types/models/missileLaunch.model'

interface Props {
  launch: MissileLaunch
}

const TableRow = ({ launch }: Props) => {
  const handelInterception = () => {}
  return (
    <tbody>
      <tr>
        <td>{launch.rocketType}</td>
        <td>{launch.timeToHit}</td>
        <td>
          {launch.status}
            Intercept
        </td>
      </tr>
    </tbody>
  )
}

export default TableRow
