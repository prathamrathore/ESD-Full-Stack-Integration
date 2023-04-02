import React from 'react'
import Toast from 'react-bootstrap/Toast'
const Notification = ({ notification, type }) => {
  if (notification === null)
    return null

  return (
    <Toast style={{marginLeft : "70%", marginTop: "5%", fontStyle: "-moz-initial" }}>

      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
      </Toast.Header>
        <div style={{fontStyle : "initial", fontSize: "16px"}} className={`${type} notification`}>
          {notification}
        </div>


    </Toast>
  )
}

export default Notification
