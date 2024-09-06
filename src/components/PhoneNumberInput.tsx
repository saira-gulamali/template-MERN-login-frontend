import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";

function PhoneNumberInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <PhoneInput
        numberInputProps={{ required: true, className: "phone-input" }}
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        international // This enables the country selection dropdown
        defaultCountry="GB" // You can set a default country if needed
      />
      {value && <p>Selected number: {value}</p>}
      {/* {`Is it a valid phone number?: ${isValidPhoneNumber(value)}`} */}
      {value && typeof value}
    </div>
  );
}

export default PhoneNumberInput;
