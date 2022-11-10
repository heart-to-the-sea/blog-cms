import { toggleBigById, removeById } from '../../../../store/container/container'
import { useAppDispatch } from '../../../../utils/hooks'
import './style/index.less'
interface Props{
  workspace?: string|number
  id?: string|number
}
export default function TopBarRight(props:Props){
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(removeById(props))
  }
  const handleBig = () => {
    dispatch(toggleBigById(props))
  }

  return<div className="app-right-top-bar">
    <div className='app-small'></div>
    <div className='app-big' onClick={handleBig}></div>
    <div className="app-close" onClick={handleClose}></div>
  </div>
}