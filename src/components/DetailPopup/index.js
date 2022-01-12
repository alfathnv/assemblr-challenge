import React from 'react'
import ReactDom from 'react-dom'
import './index.scss'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, .9',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function DetailPopup({ open, children, onClose, url, title, desc }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}/>
      <div style={MODAL_STYLES} className='popup-wrapper'>
        <img src={url} alt={title}></img>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <p className='desc'>{desc}</p>
          <button onClick={onClose}>Close</button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}
