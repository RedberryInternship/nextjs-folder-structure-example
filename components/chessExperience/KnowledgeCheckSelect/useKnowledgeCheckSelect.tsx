import { FormikHandlers } from 'formik';
import { storeCookieInFieldsObject } from 'helpers';
import { ChangeEvent, useRef } from 'react';

export const useKnowledgeCheckSelect = (
  handleChange: FormikHandlers['handleChange']
) => {
  const togglerRef = useRef<HTMLDivElement>(null);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    storeCookieInFieldsObject(e.currentTarget.value, 'experience_level');
    togglerRef.current?.blur();
  };

  return {
    changeHandler,
    togglerRef,
  };
};
