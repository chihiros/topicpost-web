import React from "react";
import Label from "../../atoms/Label";
import Textarea from "../../atoms/Input/Textarea";

type InputTextareaProps = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const InputTextarea: React.FC<InputTextareaProps> = ({ id, label, placeholder, required, value, onChange }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputTextarea;
