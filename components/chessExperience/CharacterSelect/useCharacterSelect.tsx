import { FormikHandlers } from 'formik';
import { storeCookieInFieldsObject } from 'helpers';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { getGrandmastersRequest } from 'services';
import { Grandmaster } from 'types';

export const useCharacterSelect = (
  handleChange: FormikHandlers['handleChange']
) => {
  const togglerRef = useRef<HTMLDivElement>(null);
  const [grandmasters, setGrandmasters] = useState<Grandmaster[]>();
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    storeCookieInFieldsObject(e.currentTarget.value, 'character_id');
    togglerRef.current?.blur();
  };

  useEffect(() => {
    const getGrandmasters = async () => {
      const res = await getGrandmastersRequest();
      setGrandmasters(res.data);
    };
    getGrandmasters();
  }, []);

  return {
    changeHandler,
    togglerRef,
    grandmasters,
  };
};
