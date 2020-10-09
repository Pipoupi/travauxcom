import { GET, HOME } from '../../utils/constant';

export const getHome = (url) => {
  return {
    type: HOME + GET,
    url,
  };
};
