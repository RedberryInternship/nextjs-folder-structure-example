import { FormikHandlers } from 'formik';

export type PropsType = {
  handleChange: FormikHandlers['handleChange'];
  value: number | null;
};
