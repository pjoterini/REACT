import React from 'react'

export default function SidebarItem({ name, active, handleClick }: { name: string, active: boolean, handleClick: React.MouseEventHandler }) {
  return (
    <button onClick={handleClick} className={`sidebar-item ${active ? 'active' : ''}`}>
        {name}
    </button>
  )
}
