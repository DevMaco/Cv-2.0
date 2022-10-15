import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  BeakerIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { isUint16Array } from "util/types";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
  window.location.href= 'mailto:jeanmarc.guillaume17@gmail.com?subject={formaData.subject}&body=Hi, my name is ${formaData.name}.${formaData.message} () {formData.email}) ';  
 };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          J'ai ce qu'il te faut.{" "}
          <span className="decoration-(#F7AB0A)/50 underline"> parlons .</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+33781559317</p>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">
                jeanmarc.guillaumeprofessionel@gmail.com
              </p>
            </div>
          </div>
          <div
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center space-x-5 justify-center"
          >
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">8rue claude nougaro</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nom"
              className="contactInput"
              type="text"
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Objet"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
