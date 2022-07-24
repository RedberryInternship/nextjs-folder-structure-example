import { FormikErrors, FormikHandlers } from 'formik';
import { HTMLInputTypeAttribute } from 'react';
import { PersonalInformation } from 'types';

export type PropsType = {
  placeholder: `${string} *`;
  type: HTMLInputTypeAttribute;
  inputName: keyof PersonalInformation;
  handleChange: FormikHandlers['handleChange'];
  errors: FormikErrors<PersonalInformation>;
  value: string;
  dirty: boolean | undefined;
};
