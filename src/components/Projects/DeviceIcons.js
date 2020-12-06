import React from 'react'

const DeviceIcons = ({ devices }) => {
  const devicesList = devices.map((device) => (
    <i
      className={`fa fa-${device}`}
      style={{ marginLeft: '2px', marginRight: '2px' }}
      aria-hidden='true'
    ></i>
  ))
  return devicesList
}

export default DeviceIcons
