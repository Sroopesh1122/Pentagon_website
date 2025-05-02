import React from 'react'
import ReactPlayer from 'react-player'


const VedioPlayer = ({url}) => {
  return (
    <section className='w-full h-full'>
      <ReactPlayer 
       controls={false} 
       url={url}
       width={"100%"}
       height={"100%"}
       playing
       loop={true}
       />
    </section>
  )
}

export default VedioPlayer
