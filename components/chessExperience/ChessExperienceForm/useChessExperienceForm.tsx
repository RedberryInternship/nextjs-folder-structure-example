import { getCookie, hasCookie, removeCookies } from 'cookies-next';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { chessExperienceValidationSchema } from 'schemas';
import { getRegisterRequest } from 'services';
import { ChessExperience, Merge, PersonalInformation } from 'types';
import { getFormInitialValue } from './helpers';

export const useChessExperienceForm = () => {
  const router = useRouter();
  const formik = useFormik<ChessExperience>({
    initialValues: getFormInitialValue(),
    validationSchema: chessExperienceValidationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: async (data) => {
      if (hasCookie('fields')) {
        const fields: Merge<PersonalInformation, ChessExperience> = JSON.parse(
          getCookie('fields') as string
        );
        try {
          await getRegisterRequest({
            ...fields,
            already_participated: Boolean(data.already_participated),
          });
          removeCookies('fields');
          router.push('/submitted');
        } catch (error) {
          toast('unexpected error occurred', {
            type: 'error',
            theme: 'dark',
          });
        }
      } else {
        toast('unexpected error occurred', {
          type: 'error',
          theme: 'dark',
        });
      }
    },
  });

  useEffect(() => {
    if (formik.errors) {
      toast(
        formik.errors[Object.keys(formik.errors)[0] as keyof ChessExperience],
        {
          theme: 'dark',
          type: 'error',
        }
      );
    }
  }, [formik.errors]);

  return {
    formik,
  };
};
