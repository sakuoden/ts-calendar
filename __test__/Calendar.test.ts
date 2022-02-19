import Calendar from '../src/model/calendar/Calendar';

test('2022年1月のカレンダー', () => {
  const thisMonth: Calendar = Calendar.createFrom(2022, 1);

  expect(thisMonth.getYear()).toBe(2022);
  expect(thisMonth.getMonth()).toBe(1);

  const january2022Weeks: string[] = thisMonth.getWeeks().map(week => {
    const weekDates: string[] = week.getDates().map(date => date.toJapaneseString());
    return weekDates.join(",");
  })

  const actual: string = january2022Weeks.join("|\n");

  expect(actual).toBe(
    "2021年12月26日,2021年12月27日,2021年12月28日,2021年12月29日,2021年12月30日,2021年12月31日,2022年1月1日|\n" +
    "2022年1月2日,2022年1月3日,2022年1月4日,2022年1月5日,2022年1月6日,2022年1月7日,2022年1月8日|\n" +
    "2022年1月9日,2022年1月10日,2022年1月11日,2022年1月12日,2022年1月13日,2022年1月14日,2022年1月15日|\n" +
    "2022年1月16日,2022年1月17日,2022年1月18日,2022年1月19日,2022年1月20日,2022年1月21日,2022年1月22日|\n" +
    "2022年1月23日,2022年1月24日,2022年1月25日,2022年1月26日,2022年1月27日,2022年1月28日,2022年1月29日|\n" +
    "2022年1月30日,2022年1月31日,2022年2月1日,2022年2月2日,2022年2月3日,2022年2月4日,2022年2月5日"
  );
});

test("2020年1月の前の月のカレンダー", () => {
  const thisMonth: Calendar = Calendar.createFrom(2022, 1);
  const lastMonth: Calendar = thisMonth.lastMonth();

  expect(lastMonth.getYear()).toBe(2021);
  expect(lastMonth.getMonth()).toBe(12);

  const december2021Weeks: string[] = lastMonth.getWeeks().map(week => {
    const weekDates: string[] = week.getDates().map(date => date.toJapaneseString());
    return weekDates.join(",");
  });

  const actual: string = december2021Weeks.join("|\n");

  expect(actual).toBe(
    "2021年11月28日,2021年11月29日,2021年11月30日,2021年12月1日,2021年12月2日,2021年12月3日,2021年12月4日|\n" +
    "2021年12月5日,2021年12月6日,2021年12月7日,2021年12月8日,2021年12月9日,2021年12月10日,2021年12月11日|\n" +
    "2021年12月12日,2021年12月13日,2021年12月14日,2021年12月15日,2021年12月16日,2021年12月17日,2021年12月18日|\n" +
    "2021年12月19日,2021年12月20日,2021年12月21日,2021年12月22日,2021年12月23日,2021年12月24日,2021年12月25日|\n" +
    "2021年12月26日,2021年12月27日,2021年12月28日,2021年12月29日,2021年12月30日,2021年12月31日,2022年1月1日"
  );
});
