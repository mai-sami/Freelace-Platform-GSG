import * as React from "react";
import useAutocomplete from "@mui/base/useAutocomplete";
import { InputWrapper, Listbox, Root, StyledTag } from "./Style";
import { Skills } from "../../../Mock/StaticData";
 import CheckIcon from '@mui/icons-material/Check';

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
     multiple: true,
    options: Skills,
    getOptionLabel: (option) => option,
  });

  return (
    <Root>
      <div {...getRootProps()}>
         <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}
