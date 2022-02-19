import Year from '../date/Year';
import Month from '../date/Month';
import CalendarWeek from './CalendarWeek';
import CalendarDate from './CalendarDate';

class Calendar {
  private readonly year: Year;
  private readonly month: Month;
  private readonly weeks: CalendarWeek[];

  private constructor(year: Year, month: Month, weeks: CalendarWeek[]) {
    this.year = year;
    this.month = month;
    this.weeks = weeks;
  }

  public static of = (year: Year, month: Month): Calendar => {
    const firstWeek: CalendarWeek = CalendarWeek.ofFirst(year, month);

    const result: CalendarWeek[] = [firstWeek];

    let week: CalendarWeek = firstWeek;
    const lastDateOfCalendar: CalendarDate = CalendarDate.lastDateOf(year, month);
    while (!week.contains(lastDateOfCalendar)) {
      week = week.nextWeek();
      result.push(week);
    }

    return new Calendar(year, month, result);
  }

  public static createFrom = (year: number, month: number): Calendar => Calendar.of(Year.of(year), Month.of(month));

  public static ofThisMonth = (): Calendar => Calendar.of(Year.thisYear(), Month.thisMonth());

  public nextMonth = (): Calendar => {
    if (this.month.isDecember()) return  Calendar.of(this.year.nextYear(), Month.january());

    return Calendar.of(this.year, this.month.nextMonth());
  }

  public lastMonth = (): Calendar => {
    if (this.month.isJanuary()) return  Calendar.of(this.year.lastYear(), Month.december());

    return Calendar.of(this.year, this.month.lastMonth());
  }

  public getYear = (): number => this.year.toNumber();

  public getMonth = (): number => this.month.toNumber();

  public getWeeks = (): CalendarWeek[] => this.weeks;
}

export default Calendar;
