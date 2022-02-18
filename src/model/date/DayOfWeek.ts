class DayOfWeek {
  private readonly value: DayOfWeekType;

  private constructor(value: DayOfWeekType) {
    this.value = value;
  }

  public static SUNDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.SUNDAY);
  public static MONDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.MONDAY);
  public static TUESDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.TUESDAY);
  public static WEDNESDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.WEDNESDAY);
  public static THURSDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.THURSDAY);
  public static FRIDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.FRIDAY);
  public static SATURDAY = (): DayOfWeek => new DayOfWeek(DayOfWeekType.SATURDAY);

  public static from = (date: Date): DayOfWeek => {
    const day: number = date.getDay();

    switch (day) {
      case 0: return DayOfWeek.SUNDAY();
      case 1: return DayOfWeek.MONDAY();
      case 2: return DayOfWeek.TUESDAY();
      case 3: return DayOfWeek.WEDNESDAY();
      case 4: return DayOfWeek.THURSDAY();
      case 5: return DayOfWeek.FRIDAY();
      case 6: return DayOfWeek.SATURDAY();
      default : throw new Error('Unexpected Error');
    }
  }

  public isSunday = (): boolean => this.value === DayOfWeekType.SUNDAY;
  public isMonday = (): boolean => this.value === DayOfWeekType.MONDAY;
  public isTuesday = (): boolean => this.value === DayOfWeekType.TUESDAY;
  public isWednesday = (): boolean => this.value === DayOfWeekType.WEDNESDAY;
  public isThursday = (): boolean => this.value === DayOfWeekType.THURSDAY;
  public isFriday = (): boolean => this.value === DayOfWeekType.FRIDAY;
  public isSaturday = (): boolean => this.value === DayOfWeekType.SATURDAY;

  public toJapaneseString = (): string => {
    switch (this.value) {
      case 'SUNDAY': return '日';
      case 'MONDAY': return '月';
      case 'TUESDAY': return '火';
      case 'WEDNESDAY': return '水';
      case 'THURSDAY': return '木';
      case 'FRIDAY': return '金';
      case 'SATURDAY': return '土'
      default: throw new Error('Illegal State Error');
    }
  }
}

const DayOfWeekType = {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
} as const;
type DayOfWeekType = typeof DayOfWeekType[keyof typeof DayOfWeekType];

export default DayOfWeek;
