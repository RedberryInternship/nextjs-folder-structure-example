import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { ChessExperience, PersonalInformation } from 'types';

export const storeCookieInFieldsObject = (
  value: string,
  key: keyof PersonalInformation | keyof ChessExperience
) => {
  const cookieCheck = hasCookie('fields');
  let newCookies: {
    [key: string]: any;
  } = {};
  if (cookieCheck) {
    newCookies = {
      ...JSON.parse(getCookie('fields') as string),
    };
  }
  newCookies[key] = value;
  setCookie('fields', JSON.stringify(newCookies));
};
