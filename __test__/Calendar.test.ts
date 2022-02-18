import Calendar from '../src/model/calendar/Calendar';

test('2022年1月のカレンダー', () => {
  const thisMonth: Calendar = Calendar.from(2022, 1);

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
