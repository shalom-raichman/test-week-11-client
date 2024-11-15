import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../redux/store'
import { useEffect } from 'react'

interface Props {
  component: React.ReactNode
}

const Gourd = ({ component }: Props) => {
  const user = useAppSelector((s) => s.user.user)
  const navigator = useNavigate()
  useEffect(() => {
    if (user.name == '') navigator('/login')
  }, [user])
  return component
}

export default Gourd
