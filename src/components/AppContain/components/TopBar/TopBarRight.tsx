import { ReactNode, RefObject } from "react"
import './style/index.less'
import { unmountComponentAtNode } from "react-dom"
interface Props{
  parent:RefObject<Element>
}
export default function TopBarRight(props:Props){
  const handleClose = () => {
    if (props.parent.current) {
      unmountComponentAtNode(props.parent.current)
    }
  }

  return<div className="app-right-top-bar">
    <div></div>
    <div></div>
    <div className="app-close" onClick={handleClose}></div>
  </div>
}