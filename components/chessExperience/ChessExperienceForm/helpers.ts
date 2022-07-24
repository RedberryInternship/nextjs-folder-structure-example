import { getCookie, hasCookie } from 'cookies-next';

export const getFormInitialValue = () => {
  let experience_level = '';
  let character_id = null;
  let already_participated = null;
  if (hasCookie('fields')) {
    const fields = JSON.parse(getCookie('fields') as string);
    experience_level = fields!.experience_level ?? '';
    character_id = fields!.character_id ?? null;
    already_participated = fields!.already_participated ?? null;
  }
  return {
    experience_level,
    character_id,
    already_participated,
  };
};
