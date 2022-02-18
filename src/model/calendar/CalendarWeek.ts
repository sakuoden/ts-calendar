import Year from '../date/Year';
import Month from '../date/Month';
import CalendarDate from './CalendarDate';

class CalendarWeek {
  private readonly dates: CalendarDate[];

  private constructor(dates: CalendarDate[]) {
    if (dates.length !== 7) throw new Error('Illegal Argument Error');
    this.dates = dates;
  }

  public static ofFirst = (year: Year, month: Month): CalendarWeek => {
    const firstDate: CalendarDate = CalendarDate.firstDateOf(year, month);

    const halfDates: CalendarDate[] = this.packInPreviousColumn(firstDate);
    const dates: CalendarDate[] = this.putInNextColumn(firstDate, halfDates);

    return new CalendarWeek(dates);
  }

  private static packInPreviousColumn = (firstDate: CalendarDate): CalendarDate[] => {
    const result: CalendarDate[] = [firstDate];

    let date = firstDate;
    while (!date.dayOfWeek().isSunday()) {
      date = date.yesterday();
      result.unshift(date);
    }

    return result;
  }

  private static putInNextColumn = (fistDate: CalendarDate, halfDates: CalendarDate[]): CalendarDate[] => {
    let date = fistDate;
    while (!date.dayOfWeek().isSaturday()) {
      date = date.tomorrow();
      halfDates.push(date);
    }

    return halfDates;
  }

  public contains = (targetDate: CalendarDate): boolean => {
    return this.dates.some(date => date.sameDate(targetDate));
  }

  public lastDate = (): CalendarDate => this.dates[6];

  public nextWeek = (): CalendarWeek => {
    const nextWeekFirstDate: CalendarDate = this.lastDate().tomorrow()

    const result: CalendarDate[] = [nextWeekFirstDate];

    let date: CalendarDate = nextWeekFirstDate;
    while (!date.dayOfWeek().isSaturday()) {
      date = date.tomorrow();
      result.push(date);
    }

    return new CalendarWeek(result);
  }

  public getDates = (): CalendarDate[] => this.dates;
}

export default CalendarWeek;
