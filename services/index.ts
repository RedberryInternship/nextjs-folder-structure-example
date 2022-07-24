import { AxiosResponse } from 'axios';
import {
  ChessExperience,
  Grandmaster,
  Merge,
  PersonalInformation,
} from 'types';
import axios from './axios';

export const getGrandmastersRequest = (): Promise<
  AxiosResponse<Grandmaster[]>
> => {
  return axios.get('/grandmasters');
};

export const getRegisterRequest = (
  data: Merge<PersonalInformation, ChessExperience>
): Promise<AxiosResponse<{}>> => {
  return axios.post('/register', data);
};
