import React from "react";

function EventPopup(props: { close: () => void; info: object }) {
  return (
    <div className="absolute left-0 top-0 z-10 bg-gray-500  w-full h-full justify-center items-center flex bg-opacity-55 ">
      <div className="relative w-[800px] h-[600px] bg-white rounded-lg text-center  py-10 px-[60px]">
        <p className="text-2xl text-black text-center">Event Detail</p>
        {props.info.title}
      </div>
    </div>
  );
}

export default EventPopup;
