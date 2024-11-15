import { socket } from '../../../main'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import TableRow from '../TableRow'
import { MissileLaunch } from '../../../types/models/missileLaunch.model'
import { fetchMissileLaunch } from '../../../redux/missileSlice'

const Inteseptors = () => {
  const user = useAppSelector((s) => s.user.user)
  const missileLaunch = useAppSelector((s) => s.missileLaunch.missileLaunch)
  const dispatch = useAppDispatch()

  socket.on('new_launch_has_accord', (socket: MissileLaunch) => {
    console.log('555555555555')
    dispatch(fetchMissileLaunch())
  })

  return (
    <div>
      <h1>Inteseptors</h1>

      <div className='ammo-bar'>
        <h4>Available Ammo</h4>
        {user.orgnization.resources.map((r) => (
          <p className='alert alert-light'>
            {r.name}: {r.amount}
          </p>
        ))}
      </div>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Roket</th>
            <th scope='col'>Time To Hit</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        {missileLaunch.map((l) => (
          <TableRow key={l._id} launch={l} />
        ))}
      </table>
    </div>
  )
}

export default Inteseptors
