import { FAIL, GET, HOME, PENDING, SUCCESS } from '../../utils/constant';

const home = (
  state = { ids: [], nextId: [], nextNumber: [], stories: [], loading: false, error: false },
  action,
) => {
  switch (action.type) {
    case HOME + GET + SUCCESS: {
      const { ids, stories } = action.data;
      return {
        ...state,
        ids,
        stories,
        loading: false,
      };
    }
    case HOME + GET + PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case HOME + GET + FAIL: {
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

export default home;
