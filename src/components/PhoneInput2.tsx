import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";

function PhoneInput2() {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      {phone && phone}
      {phone && `is phone valid?: ${isPhoneValid(phone)}`}
      {phone && typeof phone}
    </div>
  );
}

const phoneUtil = PhoneNumberUtil.getInstance();

function isPhoneValid(phone: string) {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    console.log(error);
    return false;
  }
}
export default PhoneInput2;
