import {Moment} from 'moment';

export function generateCalendar(initialDate) {
  let calendar = [];
  const startDay = initialDate.clone().startOf('month').startOf('isoWeek');
  const endDay = initialDate.clone().endOf('month').endOf('isoWeek');

  let date = startDay.clone().subtract(1, 'day');

  while (date.isBefore(endDay, 'day')) {
    calendar.push({
      days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
    });
  }

  return calendar;
}

