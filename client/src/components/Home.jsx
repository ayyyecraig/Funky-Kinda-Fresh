import React from 'react'
import YoutubeEmbed from './Videos'

export default function home() {
  return (
    <div className="home">
        <div>
            <img style={{display: 'block'}}
            src="https://upserve.com/media/sites/2/farm-to-table-vegetables-1100x600.jpg"
            alt="logo" className='p1'
            />
         </div>  
          <div>
              <img style={{display: 'block'}}
             src="http://www.kilzerskitchen.co.za/images/blog/august2012/fish.jpg"
             alt="logo" className='p2'
             />
        </div>
         <div>
             <img style={{display: 'block'}}
             src="https://upserve.com/media/sites/2/bigstock-Vegetable-Market-19473113-1100x600-3.jpg?5fcdd705667b4"
             alt="logo" className='p3'
             />
        </div>
        <div>
          <img style={{display: 'block'}}
          src="https://d1hbl61hovme3a.cloudfront.net/assets_us/louisiana-style-hot-sauce.jpg"
          alt="logo" className='p4' />
        </div>
        <div>
          <img style={{display: 'block'}}
          src="https://cdn-japantimes.com/wp-content/uploads/2017/08/p14-itoh-nukadoko-a-20170820-870x653.jpg"
          alt="logo" className='p5' />
        </div>
        <div>
          <img style={{display:'block'}} src="https://fthmb.tqn.com/x5GBzI3BYLpDk24XSgu9Tq_lfeA=/2121x1414/filters:fill(auto,1)/GettyImages-567585783-5825bff75f9b58d5b1cee954.jpg" alt='logo'
          className='p6' />
        </div>
       <div className='video'>
          <YoutubeEmbed embedId='gYksTBZUMl4' />
       </div>

    </div>
  )
}
