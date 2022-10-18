export interface IValidators {
  validateEmail: (value: any) => boolean;
  validateFieldMinLength: (value: any, minLength: number) => boolean;
}

export default {
  validateEmail: (value) =>
    new RegExp(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    ).test(value),
  validateFieldMinLength: (value, minLength) =>
    value.split(" ")?.length >= minLength,
} as IValidators;
