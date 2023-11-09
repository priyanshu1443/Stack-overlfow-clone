import React from 'react'

function Avatar({ children, backgroundColor, py, px, color, borderRadius, fontSize, cursor }) {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || "pointer",
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
