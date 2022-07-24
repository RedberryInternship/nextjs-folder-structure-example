import * as Yup from 'yup';

export const personalInformationValidationSchema = Yup.object({
  name: Yup.string()
    .required('name is required')
    .min(2, 'name must have minimum 2 characters'),
  email: Yup.string()
    .required('Email is required')
    .email()
    .matches(/@redberry.ge$/gm, {
      message: 'Please provide Redberry email',
    }),
  phone: Yup.string()
    .required('Phone is required')
    .min(9, 'Phone number must have minimum 9 characters')
    .max(9, 'Phone number must have maximum 9 characters')
    .matches(/^\d+$/, {
      message: 'Please provide valid phone number',
    }),
  date_of_birth: Yup.date().required('date is required'),
});

export const chessExperienceValidationSchema = Yup.object({
  experience_level: Yup.string().required('Experience level is required'),
  character_id: Yup.string().required('Character id is required'),
  already_participated: Yup.boolean().required('Already participated'),
});
