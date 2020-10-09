import { GET, SUCCESS, ITEM, PENDING, FAIL, COMMENT } from '../../utils/constant';

const item = (state = { content: {}, loading: false, error: false }, action) => {
  switch (action.type) {
    case ITEM + GET + SUCCESS: {
      const { itemContent } = action;
      return {
        ...state,
        content: itemContent,
        loading: false,
      };
    }
    case ITEM + GET + PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ITEM + GET + FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ITEM + COMMENT + GET + PENDING: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default item;
