import Initiative from "./Initiative";

export default interface Organization {
  "name":string;
  "description":string;
  "address":string;
  "image":string;
  "url":string;
  "phone":string;
  "mailingAddress":string;
  "country":string;
  "EIN":string;
  "initatives": Array<Initiative>
}