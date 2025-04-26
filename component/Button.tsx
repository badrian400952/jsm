import React from "react";
interface Props {
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  classname: string;
  onClick?: () => void;
}
const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.classname} mt-5 rounded-md px-2.5 py-2.5 text-sm font-semibold  shadow-xs ring-1 ring-gray-300 ring-inset `}
    >
      {props.children}
    </button>
  );
};

export default Button;
