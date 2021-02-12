export interface FormField {
  fieldType: string;
  name: string;
  default: string;
  validations: string[];
  options: { name: string; value: string }[];
  label: string;
  order: number;
}
