import React from 'react';

const HoursOfOp = props =>{
  if(props.hoursOfOp){
    const days = bizDays(props.hoursOfOp);

    return(
      <section className="hours-of-op-container">
        <ul className="hours-of-op">
          {Array.apply(null, Array(7)).map( (el, day) =>(
            <li key={day} className="day-container">
              {displayDay(days, day)}
            </li>
          ))}
        </ul>
      </section>
    )
  } else {
    return( <div></div> )
  }
}

const bizDays = hoursOfOp =>{
  const days = {};

  for( let i=0; i < hoursOfOp.length; i++){
    let day = hoursOfOp[i].day;
    days[day] = days[day] || [];
    days[day].push(hoursOfOp[i].biz_time);
  }


  return days;
}

const displayDay = (days, day) => {
  let text;
  switch(day) {
    case 1:
      text = "Mon";
      break;
    case 2:
      text = "Tues";
      break;
    case 3:
      text = "Wed";
      break;
    case 4:
      text = "Thu";
      break;
    case 5:
      text = "Fri";
      break;
    case 6:
      text = "Sat";
      break;
    case 0:
      text = "Sun";
  }


  if (!days[day]) {
    return (
      <section className="day-sub-container">
        <h2 className="hrs-of-op-title">{text}</h2>
        <p className="business-hrs">Closed</p>
      </section>
    )
  } else {
    return (
      <section className="day-sub-container">
        <h2 className="hrs-of-op-title">{text}</h2>
        {dayTimes(days[day])}
      </section>
    )
  }
}

const dayTimes = day =>{
  const start = day[0];
  const close = day[1];
  const startHr = Math.floor(start);
  const closeHr = Math.floor(close);
  const startMin = (start-startHr)*60;
  const closeMin = (close-closeHr)*60;
  const startTime = formatTime(startHr, startMin);
  const closeTime = formatTime(closeHr, closeMin);
  

  return(
    <span className="business-hrs">
      <p className="day-hrs">
        {startTime}-{closeTime}
      </p>
      {isOpen(day, start, close)}
    </span>
  )
}

const formatTime = (hr, min) =>{
  let amPm = "am"
  if( min > 60){
    hr++;
    min = min % 60;
  }

  if(hr > 12){
    amPm="pm";
    hr = hr % 12;
  }

  return( `${hr}:${min} ${amPm}` )
}

const isOpen = (day,start, close) =>{
  const now = new Date()
  const currentTime = now.getHours();


  if ( day ===  now.getDay() ){
    if( start.getHours() < currentTime && close.getHours() > currentTime ){
      return( <p className="open">Open</p> )
    } else {
      return( <p className="closed">Closed</p> )
    }
  } else {
    return( <div></div> )
  }
}

export default HoursOfOp;