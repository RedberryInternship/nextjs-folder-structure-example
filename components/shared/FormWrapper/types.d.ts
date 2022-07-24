import { PropsWithChildren } from 'react';

export type PropsType = PropsWithChildren<{
  headerText: string;
  pageName: string;
  pageDescription: string;
  currentStep: 1 | 2;
}>;
