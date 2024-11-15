import { socket } from '../../../main'
import { fetchMissileLaunchStatus } from '../../../redux/missileSlice'
import { useAppDispatch } from '../../../redux/store'
import { MissileLaunchStatusEnum } from '../../../types/enums/MissileLaunchStatusEnum'

interface Props {
  _id: string
}

const InterceptionBtn = ({ _id }: Props) => {
  const dispatch = useAppDispatch()

  const handelIntercetion = () => {
    dispatch(
      fetchMissileLaunchStatus({
        _id,
        status: MissileLaunchStatusEnum.Intercepted,
      })
    )
    socket.emit('interception_launch')
  }
  return (
    <button className='btn btn-danger' onClick={handelIntercetion}>
      Intercept
    </button>
  )
}

export default InterceptionBtn
