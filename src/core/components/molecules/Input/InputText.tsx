import React from "react";
import Label from "../../atoms/Label";
import Text from "../../atoms/Input/Text";

type InputTextProps = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<InputTextProps> = ({ id, type, label, placeholder, required, value, onChange }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Text
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputText;
