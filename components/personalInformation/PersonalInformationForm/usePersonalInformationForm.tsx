import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { personalInformationValidationSchema } from 'schemas';
import { PersonalInformation } from 'types';
import { getFormInitialValue } from './helpers';

export const usePersonalInformationForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: getFormInitialValue(),
    onSubmit: () => {
      router.push('/chess-experience');
    },
    validationSchema: personalInformationValidationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
  });

  useEffect(() => {
    if (formik.errors) {
      toast(
        formik.errors[
          Object.keys(formik.errors)[0] as keyof PersonalInformation
        ],
        {
          theme: 'dark',
          type: 'error',
        }
      );
    }
  }, [formik.errors]);

  return { formik };
};
