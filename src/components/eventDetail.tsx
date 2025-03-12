import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { TempForm, Tform } from "../util/types";

function EventDetail(props: {
  date: string;
  close: () => void;
  addEvent: React.Dispatch<React.SetStateAction<Tform[]>>;
}) {
  const [selectedValue, setSelectedValue] = useState("");
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
  const [form, setForm] = useState<TempForm>({
    title: "",
    participents: [],
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
    const dateTimeStr = `${form.date} ${form.time}`;

    // Convert to Date object
    const dateObj = new Date(dateTimeStr);
    const temp: Tform = {
      title: form.title,
      participents: form.participents,
      date: dateObj,
    };
    props.addEvent((prev) => {
      return [...prev, temp];
    });
    props.close();
  };
  const handleAddParticipant = () => {
    if (selectedValue && !form.participents.includes(selectedValue)) {
      setForm((prev) => {
        return { ...prev, participents: [...prev.participents, selectedValue] };
      });
    }

    setSelectedValue("");
  };
  const removeParticipant = (item: string) => {
    setForm((prev) => {
      return {
        ...prev,
        participents: prev.participents.filter((i) => i !== item),
      };
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
          <div className="flex  items-center">
            <select
              className="b-1 border-gray-700 outline-none border px-2  py-2 rounded-lg w-[300px] mt-3"
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
            >
              <option value="">Select Participent</option>
              {participents.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <button
              onClick={handleAddParticipant}
              className="bg-gray-500  mx-5 mt-3 text-white  h-8 rounded-md  w-40"
            >
              Add Participant
            </button>
          </div>

          <div className="flex">
            {form.participents.map((item) => {
              return (
                <div
                  className="flex ml-3 px-2 bg-gray-200 rounded-md items-center mt-3
              "
                >
                  {item}
                  <button
                    onClick={() => {
                      removeParticipant(item);
                    }}
                  >
                    <Trash2
                      size={16}
                      className="ml-3 hover:scale-110 transition-transform duration-100"
                    />
                  </button>
                </div>
              );
            })}
          </div>

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
