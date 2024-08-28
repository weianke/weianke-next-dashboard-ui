"use client";

import { calendarEvents } from "@/lib/data";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useState } from "react";
import { Calendar, dayjsLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

dayjs.locale("zh-cn"); // 设置 dayjs 的语言为中文
const localizer = dayjsLocalizer(dayjs);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const formats = {
    monthHeaderFormat: (date: Date) => dayjs(date).format("MMMM YYYY"), // 月份头格式
    dayHeaderFormat: (date: Date) => dayjs(date).format("dddd MM月D号"), // 天头格式
    dayRangeHeaderFormat: ({ start, end }: { start: Date; end: Date }) =>
      `${dayjs(start).format("MM月DD号")} - ${dayjs(end).format("DD号")}`, // 天范围头格式
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "97%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 19, 0, 0)}
      formats={formats} // 自定义格式
      messages={{
        work_week: "工作日",
        day: "天",
        today: "今天",
        previous: "上一步",
        next: "下一步",
        month: "月",
        week: "周",
        date: "日期",
        time: "时间",
        event: "事件",
        allDay: "全天",
        noEventsInRange: "没有事件在此范围内",
        showMore: (total) => `+${total} 更多`,
      }}
    />
  );
};

export default BigCalendar;
