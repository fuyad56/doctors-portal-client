import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#e8e8e8",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().substr(0, 10)
  );

  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch(`http://localhost:5000/addAppointment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          closeModal();
          alert("Appointment created successfully");
        } else {
          alert("Failed to create appointment");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Appointment Modal"
      >
        <h2 className="text-2xl font-semibold text-[#19D3AE] pb-6 text-center">
          {appointmentOn.subject}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-auto flex flex-col justify-between items-center"
        >
          <input
            type="date"
            defaultValue={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            {...register("date", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.date && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <input
            type="text"
            placeholder="Your time"
            defaultValue={appointmentOn.visitingHour}
            {...register("visitingHour", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.visitingHour && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.name && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.phone && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.email && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <select
            {...register("gender", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <input
            type="number"
            placeholder="Age"
            {...register("age", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.weight && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <input
            type="number"
            placeholder="Weight (in kg)"
            {...register("weight", { required: true })}
            className="input-style border border-gray-600 px-2 py-2 m-2 w-[500px] rounded text-[1rem] font-medium text-black-400"
          />
          {errors.weight && (
            <span className="text-[#ff0000] mr-[320px]">
              <FontAwesomeIcon icon={faTriangleExclamation} /> This field is
              required
            </span>
          )}

          <button
            type="submit"
            className="px-8 py-2 mt-4 uppercase rounded-lg bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-lg font-medium text-gray-50 shadow-xl hover:rounded-full"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
