import React from "react";

function EventPopup(props: { close: () => void; info: any }) {
  const startDate = new Date(props.info.event.start);
  const endDate = new Date(props.info.event.end);
  console.log("this is not okay ", props.info.event.start);
  return (
    <div className="absolute left-0 top-0 z-10 bg-gray-500  w-full h-full justify-center items-center flex bg-opacity-55 ">
      <div className="relative w-[800px] h-[600px] bg-white rounded-lg text-center  py-10 px-[60px]">
        <button
          className="absolute right-3 top-3"
          onClick={() => {
            props.close();
          }}
        >
          ❌
        </button>
        <p className="text-2xl text-black text-center">
          {props.info.event.title}
        </p>
        <p className="text-xl mt-10">
          Event is scheduled on{" "}
          <span className="text-blue-600">{startDate.toDateString()}</span>
        </p>
        <p className="text-xl mt-10">
          From:{" "}
          <span className="text-green-600">
            {startDate.toLocaleTimeString()}{" "}
          </span>{" "}
          Till:{" "}
          <span className="text-red-600">{endDate.toLocaleTimeString()}</span>
        </p>
        <p className="text-2xl text-left mt-20">Invitations:</p>
        <div className="overflow-scroll h-[200px] mt-5">
          {props.info.event.extendedProps.participents.map((item: string) => {
            return (
              <div className="flex justify-between items-center text-lg hover:bg-gray-300 rounded-lg px-4 py-2 ">
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventPopup;
