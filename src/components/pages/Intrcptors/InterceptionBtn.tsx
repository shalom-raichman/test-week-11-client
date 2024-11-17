import { socket } from '../../../main'
import {
  fetchInterception,
} from '../../../redux/missileSlice'
import { useAppDispatch } from '../../../redux/store'
import { InterceptorsEnum } from '../../../types/enums/interceptorsEnum'

interface Props {
  _id: string
}

const InterceptionBtn = ({ _id }: Props) => {
  const dispatch = useAppDispatch()
  const handelIntercetion = () => {
    dispatch(
      fetchInterception({ _id, interceptorType: InterceptorsEnum.IronDome })
    )
    socket.emit('interception_launch', {_id})
  }
  return (
    <button className='btn btn-danger' onClick={handelIntercetion}>
      Intercept
    </button>
  )
}

export default InterceptionBtn
