import React from 'react';
import './App.css';
import Afternoon from './images/afternoon.png';
import Default from './images/default.jpg';
import Evening from './images/evening.png';
import Morning from './images/morning.jpg';
import Night from './images/night.jpg';

function App() {
  // set the current date and time object
  var todayDate = new Date();
  let timeNow = todayDate.getHours();
  let dayToday, dayImage;

  // set the if statemtent to specify the time of day
  if (timeNow < 12) {
    dayToday = 'morning';
  } else if (timeNow > 12 && timeNow < 17) {
    dayToday = 'afternoon';
  } else if (timeNow > 17 && timeNow < 20) {
    dayToday = 'evening';
  } else {
    dayToday = 'night';
  }

  // set the switch statement to set the portion of the date
  switch (dayToday) {
    case 'morning':
      dayImage = Morning;
      break;
    case 'afternoon':
      dayImage = Afternoon;
      break;
    case 'evening':
      dayImage = Evening;
      break;
    case 'night':
      dayImage = Night;
      break;
    default:
      dayImage = Default;
      break;
  }

  return (
    <div className="App">
      <img src={dayImage} alt="" />
    </div>
  );
}

export default App;
