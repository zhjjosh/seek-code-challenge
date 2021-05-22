import React from "react";
import "./style.scss";
import {
  SelectorInterface,
  SelectorOptionInterface,
} from "../../type/Interface";

function Selector(props: SelectorInterface) {
  const { placeholder, options } = props;
  return (
    <select className="selector">
      <option value="0">{placeholder}</option>
      {options.map((option: SelectorOptionInterface) => (
        <option key={option.id}>{option.name}</option>
      ))}
    </select>
  );
}

export default Selector;
