export interface DaysOfTheWeek {
  id: number,
  name: string,
  isWeekend: boolean,
}

export const daysOfTheWeek: DaysOfTheWeek[] = [
  {
    id: 0,
    name: 'Mon',
    isWeekend: false,
  },
  {
    id: 1,
    name: 'Tue',
    isWeekend: false,
  },
  {
    id: 2,
    name: 'Wed',
    isWeekend: false,
  },
  {
    id: 3,
    name: 'Thu',
    isWeekend: false,
  },
  {
    id: 4,
    name: 'Fri',
    isWeekend: false,
  },
  {
    id: 5,
    name: 'Sat',
    isWeekend: true,
  },
  {
    id: 6,
    name: 'Sun',
    isWeekend: true,
  },
];
