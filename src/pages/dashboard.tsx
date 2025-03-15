import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Layout from "../components/layout";
import EventDetail from "../components/eventDetail";
import { Tform } from "../util/types";
import EventPopup from "../components/eventPopup";

function MyCalendar() {
  const [openEventDetail, setOpenEventDetail] = useState(false);
  const [clickedDate, setClickedDate] = useState("");
  const [clickedEvent, setClickedEvent] = useState<object>();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
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
    console.log(arg.dateStr);
    setClickedDate(arg.dateStr);
    setOpenEventDetail(true);
  };
  const handleEventClick = (eventInfo) => {
    console.log(eventInfo);
    setClickedEvent(eventInfo);
    setOpenPopup(true);
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
          eventClick={handleEventClick}
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
          date={clickedDate}
          close={() => setOpenEventDetail(false)}
          addEvent={setEvents}
        />
      ) : (
        ""
      )}
      {openPopup ? (
        <EventPopup
          info={clickedEvent}
          close={() => {
            setOpenPopup(false);
          }}
        />
      ) : (
        ""
      )}
    </Layout>
  );
}

export default MyCalendar;
