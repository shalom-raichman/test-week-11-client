import { useState } from 'react'
import { useAppSelector } from '../../../redux/store'
import {
  AreaEnum,
} from '../../../types/enums/orgnizationEnum'
import AmmoBtn from './AmmoBtn'
import TableRow from '../TableRow'
import { v4 } from 'uuid'

const Terorists = () => {
  const user = useAppSelector((s) => s.user.user)
  const missileLaunch = useAppSelector(s=>s.missileLaunch.missileLaunch)
  const [Area, setArea] = useState<AreaEnum>(AreaEnum.IDFCenter)
  return (
    <div className='page'>
      <h1>Terorists</h1>
      <div className='ammo-bar'>
        <h4>Available Ammo</h4>

        <div className='form-group'>
          <label htmlFor='Select'>Area</label>
          <select
            onChange={(e) => setArea(e.target.value as AreaEnum)}
            id='disabledSelect'
            className='form-control'
          >
            <option value={AreaEnum.IDFCenter}>{AreaEnum.IDFCenter}</option>
            <option value={AreaEnum.IDFNorth}>{AreaEnum.IDFNorth}</option>
            <option value={AreaEnum.IDFSouth}>{AreaEnum.IDFSouth}</option>
            <option value={AreaEnum.IDFWestBank}>{AreaEnum.IDFWestBank}</option>
          </select>
        </div>
        {user.orgnization.resources.map((r) => (
          <AmmoBtn
          key={v4()}
            resource={r}
            area={Area}
            organization={user.orgnization.name}
          />
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
          <TableRow key={v4()} launch={l} />
        ))}
      </table>
    </div>
  )
}

export default Terorists
