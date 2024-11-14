import { useState } from 'react'
import { socket } from '../../../main'
import { useAppSelector } from '../../../redux/store'
import TableRow from './TableRow'
import { MissileLaunch } from '../../../types/models/missileLaunch.model'

const Inteseptors = () => {
  const user = useAppSelector((s) => s.user)
  const [missilsesLaunched, setMissilsesLaunched] = useState<MissileLaunch[]>(
    []
  )

  socket.on('new_launch_has_accord', (socket: MissileLaunch) => {
    console.log('555555555555')
    setMissilsesLaunched([socket, ...missilsesLaunched])
  })

  return (
    <div>
      <h1>Inteseptors</h1>

      <div className='ammo-bar'>
        <h4>Available Ammo</h4>
        {user.orgnization.resources.map((r) => (
          <p className='alert alert-light'>{r.name}: {r.amount}</p>
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
        {missilsesLaunched.map((l) => (
          <TableRow launch={l} />
        ))}
      </table>
    </div>
  )
}

export default Inteseptors
