import { VEHICLES } from "./vehicles";

export const TESTFORMCONFIG = [
  {
    fieldType: "text",
    name: "name",
    default: "",
    validations: ["required"],
    options: null,
    label: "Name",
    order: 1
  },
  {
    fieldType: "select",
    name: "vehicleTYpe",
    default: "",
    validations: ["required"],
    options: VEHICLES,
    label: "Select Vehicle Type",
    order: 2
  }
];
