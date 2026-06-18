import React from 'react'
import PropTypes from "prop-types"

const BlurBlob = ({ position, size }) => {

  //Destructuring
  const { top, left } = position;
  const { height, width } = size;
  return (
    <div className='absolute' style={{
      top: top,
      left: left,
      height: height,
      width: width,
      transform: "translate(-50%, -50%)",
    }}>
      <div className='w-full h-full bg-purple-900 rounded-full opacity-20 blur-3xl animate-blob'>

      </div>
    </div>
  )
}


// define prop types

BlurBlob.PropTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),

  size: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  })
}

export default BlurBlob;