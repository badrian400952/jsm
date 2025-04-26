import React from "react";
interface Props {
  children?: React.ReactNode;
  label: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  id?: string;
  type?: string;
  placeholder?: string;
  classname?: string;
}
const Input: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mt-2 w-full">
      <label
        htmlFor={props.label}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {props.label}
      </label>
      <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 w-full">
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className={`${props.classname}  grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6`}
        />
      </div>
    </div>
  );
};

export default Input;
