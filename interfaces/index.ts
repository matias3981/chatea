import { CountryCallingCode } from "libphonenumber-js/types";

export interface Country { 
  locale_name?: string,
  phone_code?: CountryCallingCode,
  country_code: string
}