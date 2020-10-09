import { FAIL, GET, PENDING, SUCCESS, USER } from '../../utils/constant';

const user = (state = { user: {}, loading: false, error: false }, action) => {
  switch (action.type) {
    case USER + GET + SUCCESS: {
      const { userResult } = action;
      return {
        ...state,
        user: userResult,
        loading: false,
      };
    }
    case USER + GET + PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER + GET + FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
