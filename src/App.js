import React, { useState } from 'react'
import TourInfo from './components/TourInfo';
import info from './info';



const App = () => {
  const [cityInfo, setCityInfo] = useState(info);

  if (cityInfo.length === 0) {
    return (
      <div>
        <h4 className='empty-message'>Nothing to show</h4>
        <button className='refresh-btn' onClick={() => setCityInfo(info)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='main'>
      <section>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
        </div>
        {cityInfo.map(info => {
          return <TourInfo key={info.id} info={info} setCityInfo={setCityInfo} cityInfo={cityInfo} />;
        })}
      </section>
    </div>
  )
}

export default App;