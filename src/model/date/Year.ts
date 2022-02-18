class Year {
  private readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  public static thisYear = (): Year => {
    const now: Date = new Date();

    return new Year(now.getFullYear());
  }

  public static of = (value: number) => new Year(value);

  public nextYear = (): Year => new Year(this.value + 1);

  public lastYear = (): Year => new Year(this.value - 1);

  public toNumber = (): number => this.value;
}

export default Year;
