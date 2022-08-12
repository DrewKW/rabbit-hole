import React from 'react'
import {Link} from 'react-router-dom'

const poster = new URL("/images/btimax.jpg", import.meta.url)


function bullettrain() {
  return (
    <>
    <div>BulletTrain</div>
    <div><img src={poster}/></div>
    </>
  )
}

export default bullettrain