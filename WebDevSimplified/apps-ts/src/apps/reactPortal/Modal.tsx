import React, { ReactNode } from 'react'
import  ReactDOM  from 'react-dom'

const portalDiv = document.getElementById('portal')!;

const MODAL_STYLES: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
const OVERLAY_STYLES: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

interface Props {
    children?: ReactNode
    open?: ReactNode
    onClose: React.MouseEventHandler
}

export default function Modal({ open, children, onClose }: Props) {

  if(!open) return null
    
  return ReactDOM.createPortal(
    <>
    <div style={OVERLAY_STYLES}>
  
    <div style={MODAL_STYLES}>
    <button onClick={onClose}>close modal</button>
    <div>{children}</div>
    </div>
          
    </div>
    </>,
    portalDiv    
  )
}
