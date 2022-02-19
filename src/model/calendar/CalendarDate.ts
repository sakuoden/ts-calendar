import Year from '../date/Year';
import Month from '../date/Month';
import DayOfWeek from '../date/DayOfWeek';

class CalendarDate {
  private readonly value: Date;

  private constructor(value: Date) {
    this.value = value;
  }

  public static today = (): CalendarDate => new CalendarDate(new Date());

  public static firstDateOf = (year: Year, month: Month): CalendarDate => {
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    const result: Date = new Date(year.toNumber(), month.toNumber() - 1, 1);

    return new CalendarDate(result);
  }

  public static lastDateOf = (year: Year, month: Month): CalendarDate => {
    const result: Date = new Date(year.toNumber(), month.toNumber(), 0);

    return new CalendarDate(result);
  }

  public sameDate = (otherDate: CalendarDate): boolean => {
    if (this.value.getFullYear() !== otherDate.value.getFullYear()) return false;
    if (this.value.getMonth() !== otherDate.value.getMonth()) return false;
    if (this.value.getDate() !== otherDate.value.getDate()) return false;

    return true;
  }

  public isToday = (): boolean => this.sameDate(CalendarDate.today());

  public dayOfWeek = (): DayOfWeek => DayOfWeek.from(this.value);

  public yesterday = (): CalendarDate => {
    const result: Date = new Date(this.value);
    result.setDate(result.getDate() - 1);

    return new CalendarDate(result);
  }

  public tomorrow = (): CalendarDate => {
    const result: Date = new Date(this.value);
    result.setDate(result.getDate() + 1);

    return new CalendarDate(result);
  }

  public toYear = (): Year => Year.of(this.value.getFullYear());

  public toMonth = (): Month => Month.of(this.value.getMonth() + 1);

  public toNumber = (): number => this.value.getDate();

  public toJapaneseString = () => `${this.toYear().toNumber()}年${this.toMonth().toNumber()}月${this.toNumber()}日`;

  public toString = (): string => this.toNumber().toString();
}

export default CalendarDate;
