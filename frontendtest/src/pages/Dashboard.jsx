import React from 'react'
import {Link} from 'react-router-dom'

const poster = new URL("/images/bullettrain.jpg", import.meta.url)
const poster2 = new URL("/images/Thor.jpg", import.meta.url)
const poster3 = new URL("/images/NOPE.jpg", import.meta.url)
const poster4 = new URL("/images/minions.jpg", import.meta.url)



function Dashboard() {
  return (
    <>
    
    <div>Now Playing</div>
    <p></p>
    <div>
      
      <Link to='/bullettrain'>
        <img src={poster}/>
      </Link>
      <Link to='/thor:love and thunder'>
        <img src={poster2}/>
      </Link>
      <Link to='/NOPE'>
        <img src={poster3}/>
      </Link>
      <Link to='/minions'>
        <img src={poster4}/>
      </Link>
    </div>
    <p>Upcoming</p>
    <p>Pop Topics</p>
    <p>Following!</p>
    </>
  )
}

export default Dashboard