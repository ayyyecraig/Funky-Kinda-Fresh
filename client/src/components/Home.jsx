import React from 'react'
import YoutubeEmbed from './Videos'

export default function home() {
  return (
    <div className="home">
          <a class="social-icon" href="https://www.instagram.com/wolfandthefoxdinners/" target="_blank">
            Wolf And The Fox <ion-icon name="logo-instagram"></ion-icon> </a>
          <div>
             <a href="https://imgur.com/6ryuo4f"><img src="https://i.imgur.com/6ryuo4f.jpg" title="source: imgur.com" alt="logo" className='p1'/></a>
        </div>
        <div>
          <a href="https://imgur.com/EOlEhHX"><img src="https://i.imgur.com/EOlEhHX.jpg" title="source: imgur.com" alt="logo" className='p2' /></a>
        </div>
         <div>
         <a href="https://imgur.com/MI4yqq7"><img src="https://i.imgur.com/MI4yqq7.jpg" title="source: imgur.com" 
             alt="logo" className='p3'
             /></a>
        </div>
        <div>
        <a href="https://imgur.com/6NkyY3u"><img src="https://i.imgur.com/6NkyY3u.jpg" title="source: imgur.com" 
          alt="logo" className='p4' /></a>
        </div>
        <div>
        <a href="https://imgur.com/uuofK2w"><img src="https://i.imgur.com/uuofK2w.jpg" title="source: imgur.com"
          alt="logo" className='p5' /></a>
        </div>
        <div>
        <a href="https://imgur.com/AaIoVwl"><img src="https://i.imgur.com/AaIoVwl.jpg" title="source: imgur.com"  alt='logo'
          className='p6' /></a>
        </div>
       <div className='video'>
          <YoutubeEmbed embedId='gYksTBZUMl4' />
       </div>

    </div>
  )
}
