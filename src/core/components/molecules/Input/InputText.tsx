import React from "react";
import Label from "../../atoms/Label";
import Text from "../../atoms/Input/Text";

type InputTextProps = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

const InputText: React.FC<InputTextProps> = ({ id, type, label, placeholder, required }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Text
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
export default InputText;
