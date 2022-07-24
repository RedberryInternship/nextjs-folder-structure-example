import { getCookie, hasCookie } from 'cookies-next';

export const getFormInitialValue = () => {
  let name = '';
  let phone = '';
  let email = '';
  let date_of_birth = '';
  if (hasCookie('fields')) {
    const fields = JSON.parse(getCookie('fields') as string);
    name = fields!.name ?? '';
    phone = fields!.phone ?? '';
    email = fields!.email ?? '';
    date_of_birth = fields!.date_of_birth ?? '';
  }
  console.log({
    name,
    phone,
    email,
    date_of_birth,
  });
  return {
    name,
    phone,
    email,
    date_of_birth,
  };
};
