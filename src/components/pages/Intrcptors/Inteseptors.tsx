import { v4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import TableRow from '../TableRow'
import { useEffect } from 'react'
import { socket } from '../../../main'
import { fetchMissileLaunchListByArea } from '../../../redux/missileSlice'
import { AreaEnum } from '../../../types/enums/orgnizationEnum'

const Inteseptors = () => {
  const user = useAppSelector((s) => s.user.user)
  const missileLaunch = useAppSelector((s) => s.missileLaunch.missileLaunch)
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.on('new_launch_has_accord', (socket) => {
      console.log('fetch list ')
      setTimeout(() => {
        dispatch(
          fetchMissileLaunchListByArea(
            user.orgnization.name as unknown as AreaEnum
          )
        )
      }, 500)
    })
    
  
    return () => {
      socket.off('new_launch_has_accord')
    }
  }, [])

  useEffect(() => {
    dispatch(
      fetchMissileLaunchListByArea(user.orgnization.name as unknown as AreaEnum)
    )
  }, [])

  return (
    <div>
      <h1>Inteseptors</h1>
      <div className='ammo-bar'>
        <h4>Available Ammo</h4>
        {user.orgnization.resources.map((r) => (
          <p key={v4()} className='alert alert-light'>
            {r.name}: {r.amount}
          </p>
        ))}
      </div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Roket</th>
            <th scope='col'>Time To Hit</th>
            <th scope='col'>Launch from</th>
            <th scope='col'>Launch to</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        {missileLaunch.map((l) => (
          <TableRow key={v4()} launch={l} />
        ))}
      </table>
    </div>
  )
}

export default Inteseptors
