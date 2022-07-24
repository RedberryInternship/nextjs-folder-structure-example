import { personalInformationValidationSchema } from 'schemas';
import { PersonalInformation } from 'types';

export const validateSingleField = (
  field: keyof PersonalInformation,
  value: string
) => {
  if (typeof window !== 'undefined') {
    try {
      personalInformationValidationSchema.fields[field].validateSync(value);
      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
};
