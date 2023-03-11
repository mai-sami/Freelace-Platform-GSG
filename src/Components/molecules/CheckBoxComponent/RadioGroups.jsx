import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Span } from "../../../Style/GlobalElements";

export default function RadioGroups({ data }) {
  return (
    <FormControl>
      <RadioGroup>
        {data?.map((item) => (
          <>
            <FormControlLabel
              value={item.text}
              control={<Radio />}
              label={item.text}
              color="success"
            />
            <Span>{item?.details}</Span>
          </>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
