import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Layout from "../components/layout";
function MyCalendar() {
  const [events, setEvents] = useState([
    { title: "Meeting", start: new Date() },
  ]);
  const x = new Date();
  console.log(x);
  const handleDateClick = (arg) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, start: arg.dateStr }]);
    }
  };

  return (
    <Layout>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridWeek"
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          start: "title",
          center: "",
          end: "timeGridDay,timeGridWeek,dayGridMonth,listWeek prev,next",
        }}
      />
    </Layout>
  );
}

export default MyCalendar;
