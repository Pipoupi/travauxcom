import { GET, USER } from '../../utils/constant';

export const getUserFromId = (userId) => {
  return {
    type: USER + GET,
    userId,
  };
};
