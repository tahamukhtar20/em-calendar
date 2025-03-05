function EventDetail() {
  return (
    <div className="absolute left-0 top-0 z-10 bg-gray-500  w-full h-full justify-center items-center flex bg-opacity-55 ">
      <div className="relative w-[800px] h-[600px] bg-white rounded-lg text-center  py-10 px-[60px]">
        <h1 className="text-3xl">Event Detail</h1>
        <button className="absolute right-3 top-3">❌</button>
        <div className="flex flex-col w-full   m-10">
          <label className="w-[300px] mt-3 text-left">Title:</label>
          <input className="b-1 border-gray-700 outline-none border px-2  py-2 rounded-lg w-[300px] mt-3" />
          <label className="w-[300px] mt-3 text-left">Participents:</label>
          <input className="b-1 border-gray-700 outline-none border px-2 py-2 rounded-lg w-[300px] mt-3" />
          <label className="w-[300px] mt-3 text-left">Time:</label>
          <input className="b-1 border-gray-700 outline-none border px-2 py-2 rounded-lg w-[300px] mt-3" />
          <div className="w-full justify-center items-center flex">
            <button className="bg-gray-500  mx-5 text-white py-2 px-4 rounded-md mt-16 w-96">
              Add event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
