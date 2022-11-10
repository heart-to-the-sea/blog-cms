import { toggleBigById, removeById } from '../../../../store/container/container'
import { useAppDispatch } from '../../../../utils/hooks'
import './style/index.less'
interface Props{
  id?: string|number
}
export default function TopBarRight(props:Props){
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(removeById(props.id))
  }
  const handleBig = () => {
    dispatch(toggleBigById(props.id))
  }

  return<div className="app-right-top-bar">
    <div className='app-small'></div>
    <div className='app-big' onClick={handleBig}></div>
    <div className="app-close" onClick={handleClose}></div>
  </div>
}