import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Layout from "../components/layout";
import EventDetail from "../components/eventDetail";
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
      <div className="h-[400px]">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          height={"800px"}
          initialView="dayGridWeek"
          events={events}
          dateClick={handleDateClick}
          headerToolbar={{
            start: "title",
            center: "",
            end: "timeGridDay,timeGridWeek,dayGridMonth,listWeek prev,next",
          }}
        />
      </div>

      <EventDetail date="25 march" />
    </Layout>
  );
}

export default MyCalendar;
