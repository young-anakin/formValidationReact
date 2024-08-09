import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Message</label>
          <textarea
            name="message"
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters long."
              }
            })}
          />
          {errors.message && <p className="errorMsg">{errors.message.message}</p>}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
