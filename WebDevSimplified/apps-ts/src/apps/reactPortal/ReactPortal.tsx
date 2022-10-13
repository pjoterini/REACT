import React, {useState} from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES: React.CSSProperties = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES: React.CSSProperties = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}


export default function ReactPortal() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='reactPortal'>
      <div style={BUTTON_WRAPPER_STYLES}>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            fancy modal
          </Modal>
      </div>      

      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </div>
  )
}
