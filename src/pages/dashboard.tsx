import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Layout from "../components/layout";
import EventDetail from "../components/eventDetail";
import { Tform } from "../util/types";

function MyCalendar() {
  const [openEventDetail, setOpenEventDetail] = useState(false);
  const [events, setEvents] = useState<Tform[]>([
    {
      title: "Meeting",
      participents: ["abdullah"],
      date: new Date(),
    },
  ]);
  const x = new Date();
  console.log(events);
  const handleDateClick = (arg) => {
    setOpenEventDetail(true);
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
      {openEventDetail ? (
        <EventDetail
          date="25 march 2024"
          close={() => setOpenEventDetail(false)}
          addEvent={setEvents}
        />
      ) : (
        ""
      )}
    </Layout>
  );
}

export default MyCalendar;
