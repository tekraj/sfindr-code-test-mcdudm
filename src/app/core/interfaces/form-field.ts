export interface IFormField {
  fieldType: string;
  name: string;
  default: string;
  validations: string[];
  options: { name: string; value: string }[];
  label: string;
  order: number;
  onChangeAddField: boolean;
  dependsOn?: string;
  showOn?: string;
  changedFields?: IFormField[];
}
