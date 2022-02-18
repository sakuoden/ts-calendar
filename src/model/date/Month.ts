class Month {
  private readonly value: number;

  private constructor(value: number) {
    if (value < 1) throw new Error("Illegal Argument Error")
    if (value > 12) throw new Error("Illegal Argument Error")
    this.value = value;
  }

  public static thisMonth = (): Month => {
    const now: Date = new Date();

    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    return new Month(now.getMonth() + 1);
  }

  public static of = (value: number): Month => new Month(value);

  public static january = (): Month => new Month(1);
  public static december = (): Month => new Month(12);

  public isJanuary = (): boolean => this.value === 1;
  public isDecember = (): boolean => this.value === 12;

  public nextMonth = (): Month => {
    if (this.isDecember()) return Month.january();

    return new Month(this.value + 1);
  }

  public lastMonth = (): Month => {
    if (this.isJanuary()) return Month.december();

    return new Month(this.value - 1);
  }

  public toNumber = (): number => this.value;
}

export default Month;
