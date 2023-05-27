import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "../Button";

import "./index.css";
import { useRef, useState } from "react";
import { IOptions } from "../../interfaces";

interface Props {
  onAdd: (option: any) => void;
  options: IOptions[];
}

const InputTypeahead = ({ onAdd, options }: Props) => {
  // @ts-ignore
  const ref = useRef<Typeahead>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    const label = ref?.current?.inputNode?.value;
    const value =
      options.find((option: IOptions) => option?.label?.toLowerCase() === label)
        ?.value || Date.now().toString();
    onAdd([{ label, value }]);
    ref.current.clear();
  };

  return (
    <div className="typeaheadWrap">
      <label>Product</label>
      <div className="flex-container">
        <Typeahead
          id={"inputComboBox"}
          className={"typeahead"}
          placeholder="e.g. Product ABC"
          ref={ref}
          onChange={(selected) => {
            onAdd(selected);
            ref.current.clear();
          }}
          onInputChange={setInputValue}
          options={options}
        />
        <Button disabled={inputValue?.length === 0} onClick={handleAdd} />
      </div>
    </div>
  );
};

export default InputTypeahead;
