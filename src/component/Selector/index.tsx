import React from "react";
import "./style.scss";

type Props = {
  options: ISelectorOption[];
  placeholder: string;
  selectorChanged: (arg: string) => void;
};

const Selector: React.FC<Props> = (props) => {
  const { placeholder, options, selectorChanged } = props;
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    selectorChanged(e.currentTarget.value);
  };
  return (
    <select className="selector" onChange={handleSelectChange}>
      <option value={0}>{placeholder}</option>
      {options.map((option: ISelectorOption) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
