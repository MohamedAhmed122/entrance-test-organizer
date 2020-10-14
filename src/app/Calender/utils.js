
// Creating the calender 
export const createCalendar =(value)=> {
  //Get the First Day and last day in the calender
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const calendar = [];
    while (day.isBefore(endDay, "day")) {
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
  
    return calendar;
  }


// the following functions for the styling
const isSelected =(day ,value) =>{
    return value.isSame(day, 'day')
}
const beforeToday = day =>{
    return day.isBefore(new Date(), 'day')
}
const isToday = day =>{
    return day.isSame(new Date(), 'day')
}
export const styleDay = (day, value) =>{
    if ( beforeToday(day)) return 'before'
    if (isSelected(day, value)) return 'selected'
    if( isToday(day)) return 'today'
    return '';
}

// getting the Month and the Year
export const currentMonth =(value) =>{
  return value.format('MMMM')
}
export const currentYear =(value) =>{
  return value.format('YYYY')
}


//  getting the previous and the next Month 
export const prevMonth = (value) =>{
  return value.clone().subtract(1, 'month')
}

export const nextMonth = (value) =>{
  return value.clone().add(1, 'month')
}