import React from "react";
import Label from "../../atoms/Label";
import Textarea from "../../atoms/Input/Textarea";

type InputTextareaProps = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

const InputTextarea: React.FC<InputTextareaProps> = ({ id, label, placeholder, required }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
export default InputTextarea;
