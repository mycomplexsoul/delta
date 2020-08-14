import { Movement } from "../../crosscommon/entities/Movement";
import { DateUtils } from "../../crosscommon/DateUtility";

const totalExpenseByDate = (
  movementList: Movement[],
  year: number,
  month: number,
  monthCount: number = 1,
  filterMethod: (mov: Movement) => Boolean = () => true
) => {
  const result = {
    dailyTotals: [...Array(31).keys()].map(d => ({
      day: d + 1
    }))
  };

  result.dailyTotals.forEach(t => {
    let index = 0;
    let iterable = DateUtils.getIterableCurrentMonth(year, month);

    while (index <= monthCount) {
      if (t.day <= DateUtils.lastDayInMonth(iterable.year, iterable.month)) {
        const list = movementList.filter(
          m =>
            m.mov_ctg_type === 1 &&
            filterMethod(m) &&
            m.mov_date.getTime() >=
              new Date(iterable.year, iterable.month - 1, 1).getTime() &&
            m.mov_date.getTime() <=
              new Date(
                iterable.year,
                iterable.month - 1,
                t.day,
                23,
                59,
                59
              ).getTime()
        );

        t[`expenseMonthCount${index}`] = list.length;
        t[`expenseMonth${index}`] = list.reduce(
          (sum, current) => Math.round((sum + current.mov_amount) * 100) / 100,
          0
        );
      }
      index += 1;
      iterable = DateUtils.getIterablePreviousMonth(
        iterable.year,
        iterable.month
      );
    }
  });

  return result;
};

export { totalExpenseByDate };
