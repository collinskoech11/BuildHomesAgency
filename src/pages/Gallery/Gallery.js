import React from 'react'


const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };
function Gallery() {
    return (
        <div style={{ height: '600vh', padding: 8 }}>
          <h1>OUR GALLERY</h1>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>
    )
}

export default Gallery
