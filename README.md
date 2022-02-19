# TS-Calendar

## 1 - Introduction

### 1.1 - What is this?

This is a very small TypeScript module to represent a calendar.


### 1.2 - Image

[example: 2022/1 Calendar]

| 2022/1 Calendar object      |
|-----------------------------|
| CalendarWeek object (Week1) |
| CalendarWeek object (Week2) |
| CalendarWeek object (Week3) |
| CalendarWeek object (Week4) |
| CalendarWeek object (Week5) |
| CalendarWeek object (Week6) |

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

|                             | Sun                 | Mon                 | Tue                 | Wed                 | Thu                 | Fri                 | Sat                 |
|-----------------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|
| CalendarWeek object (Week1) | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object |
| CalendarWeek object (Week2) | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object |
| CalendarWeek object (Week3) | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object |
| CalendarWeek object (Week4) | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object |
| CalendarWeek object (Week5) | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object |
| CalendarWeek object (Week6) | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object | CalenderDate object |

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

| Sun        | Mon        | Tue        | Wed        | Thu        | Fri        | Sat       |
|------------|------------|------------|------------|------------|------------|-----------|
| 2021/12/26 | 2021/12/27 | 2021/12/28 | 2021/12/29 | 2021/12/30 | 2021/12/31 | 2022/1/1  |
| 2022/1/2   | 2022/1/3   | 2022/1/4   | 2022/1/5   | 2022/1/6   | 2022/1/7   | 2022/1/8  |
| 2022/1/9   | 2022/1/10  | 2022/1/11  | 2022/1/12  | 2022/1/13  | 2022/1/14  | 2022/1/15 |
| 2022/1/16  | 2022/1/17  | 2022/1/18  | 2022/1/19  | 2022/1/20  | 2022/1/21  | 2022/1/22 |
| 2022/1/23  | 2022/1/24  | 2022/1/25  | 2022/1/26  | 2022/1/27  | 2022/1/28  | 2022/1/29 |
| 2022/1/30  | 2022/1/31  | 2022/2/1   | 2022/2/2   | 2022/2/3   | 2022/2/4   | 2022/2/5  |



## 2 - Usage

### 2.1 - Usage1 

[example: If today is January 2022]

```typescript
const thisMonth: Calendar = Calendar.ofThisMonth();
const weeks: CalendarWeek[] = thisMonth.getWeeks();

weeks.forEach(week => {
  const dates: string = week.getDates().join("|");
  console.log(`|${dates}|`);
});
```

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

```shell
|26|27|28|29|30|31|1|
|2|3|4|5|6|7|8|
|9|10|11|12|13|14|15|
|16|17|18|19|20|21|22|
|23|24|25|26|27|28|29|
|30|31|1|2|3|4|5|
```


### 2.2 - Usage2

[example: If today is January 2022]

```typescript
const thisMonth: Calendar = Calendar.ofThisMonth();
const weeks: CalendarWeek[] = thisMonth.getWeeks();

weeks.forEach(week => {
  const dates: string = week.getDates().filter(date => thisMonth.isThisMonth(date.toMonth())).join("|")
  console.log(`|${dates}|`);
});
```

⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

```shell
|1|
|2|3|4|5|6|7|8|
|9|10|11|12|13|14|15|
|16|17|18|19|20|21|22|
|23|24|25|26|27|28|29|
|30|31|
```



## 3- API Overview

### 3.1 - Calendar

| Type            | Method                    | Description                                       |
|-----------------|---------------------------|---------------------------------------------------|
| static Calendar | ofThisMonth()             | Create a Calendar object for this month.          |
| Calendar        | nextMonth()               | Returns a Calendar object for the next month.     |
| Calendar        | lastMonth()               | Returns a Calendar object for the next month.     |
| number          | getYear()                 | Get the calendar year.                            |
| number          | getMonth()                | Get the calendar month.                           |
| CalendarWeek[]  | getWeeks()                | Get an array of the weeks of the month.           |
| boolean         | isThisMonth(month: Month) | Check if the month of the argument is this month. |


### 3.2 - CalendarWeek

| Type           | Method      | Description                                                        |
|----------------|-------------|--------------------------------------------------------------------|
| CalendarDate[] | getDates()  | Get an array of CalendarDate from Sunday to Saturday for the week. |


### 3.3 - CalendarDate 

| Type    | Method     | Description                 |
|---------|------------|-----------------------------|
| number  | toNumber() | Get the date of Calendar.   |
| number  | toMonth()  | Get the month of Calendar.  |
| boolean | isToday()  | Check if the date is today. |

