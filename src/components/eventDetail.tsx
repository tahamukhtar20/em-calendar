import { useEffect, useState } from "react";

import { Tform } from "../util/types";

function EventDetail(props: {
  date: string;
  close: () => void;
  addEvent: React.Dispatch<React.SetStateAction<Tform[]>>;
}) {
  const [participents, setParticipents] = useState<string[]>([]);
  useEffect(() => {
    setParticipents([
      "Adullah",
      "Aleem",
      "mubashir",
      "musa",
      "taha",
      "shahviaz",
    ]);
  }, []);
  const [form, setForm] = useState<Tform>({
    title: "",
    participents: "",
    date: "",
    time: "",
  });
  useEffect(() => {
    setForm((prev) => {
      return { ...prev, date: props.date };
    });
  }, [props]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(form);
  };
  const handleSubmit = () => {
    props.addEvent((prev) => {
      return [...prev, form];
    });
  };
  return (
    <div className="absolute left-0 top-0 z-10 bg-gray-500  w-full h-full justify-center items-center flex bg-opacity-55 ">
      <div className="relative w-[800px] h-[600px] bg-white rounded-lg text-center  py-10 px-[60px]">
        <h1 className="text-3xl">Event Detail</h1>
        <button
          className="absolute right-3 top-3"
          onClick={() => {
            props.close();
          }}
        >
          ❌
        </button>
        <div className="flex flex-col w-full   m-10">
          <label className="w-[300px] mt-3 text-left">Title:</label>
          <input
            className="b-1 border-gray-700 outline-none border px-2  py-2 rounded-lg w-[300px] mt-3"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <label className="w-[300px] mt-3 text-left">Participents:</label>
          <input
            className="b-1 border-gray-700 outline-none border px-2 py-2 rounded-lg w-[300px] mt-3"
            name="participents"
            value={form.participents}
            onChange={handleChange}
          />
          <label className="w-[300px] mt-3 text-left">Time:</label>
          <input
            className="b-1 border-gray-700 outline-none border px-2 py-2 rounded-lg w-[300px] mt-3"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
          <div className="w-full justify-center items-center flex">
            <button
              className="bg-gray-500  mx-5 text-white py-2 px-4 rounded-md mt-16 w-96"
              onClick={handleSubmit}
            >
              Add event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
