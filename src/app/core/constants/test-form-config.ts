import { VEHICLES } from "./vehicles";

export const TESTFORMCONFIG = [
  {
    fieldType: "text",
    name: "name",
    default: "",
    validations: ["required"],
    options: null,
    label: "Name",
    order: 1,
    onChangeAddField: false
  },
  {
    fieldType: "select",
    name: "vehicleType",
    default: "",
    validations: ["required"],
    options: VEHICLES,
    label: "Select Vehicle Type",
    order: 2,
    onChangeAddField: true,
    changedFields: [
      {
        fieldType: "text",
        name: "color",
        default: "",
        validations: ["required"],
        options: null,
        label: "Color",
        order: 3,
        onChangeAddField: false,
        dependsOn : 'vehicleType',
        showOn: "bike"
      },
      {
        fieldType: "text",
        name: "brand",
        default: "",
        validations: ["required"],
        options: null,
        label: "Brand",
        order: 4,
        onChangeAddField: false,
         dependsOn : 'vehicleType',
        showOn: "car"
      }
    ]
  }
];
