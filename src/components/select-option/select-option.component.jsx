import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";
import {FormInputContainer, GroupContainer} from "../form-input/form-input.styles"
class SelectSpecialization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { label: "Employment Law", value: "employment" },
        { label: "Family Law", value: "family" },
        { label: "Immigration Law", value: "immigration" },
        { label: "Property Law", value: "property" },
        { label: "Traffic Law", value: "traffic" },
        { label: "Criminal Law", value: "criminal" },
      ],
      specialization: "",
    };
  }

  handleChange = (SelectedOption) => {
    this.setState({ Specialization: SelectedOption.target.value });
    this.props.callBack(SelectedOption.target.value); //returns value to the parent component
  };

  render() {
    const { specialization, options } = this.state;

    
    return (
      <GroupContainer>
      {/* Using FormControl from material UI reusing styles from form-input component */}
        <FormInputContainer as={FormControl} required>
          <InputLabel
            className="form-input-label"
            style={{ fontFamily: "Open Sans Condensed", fontWeight: "lighter", left: "5px"}}
            id="specialization"
          >
            Specialization
          </InputLabel>
          <Select
            defaultValue=""
            className="select-specialization"
            id="select-specialization"
            value={specialization.value}
            onChange={this.handleChange}
          >
            <MenuItem
              value=""
              style={{ 
                fontFamily: "Open Sans Condensed",
                fontWeight: "lighter",
              }}
            >
              <em>None</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={{ 
                  fontFamily: "Open Sans Condensed",
                  fontWeight: "lighter",
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormInputContainer>
      </GroupContainer>
    );
  }
}
export default SelectSpecialization;
