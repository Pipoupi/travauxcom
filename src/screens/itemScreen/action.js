import { GET, ITEM, SUCCESS, COMMENT } from '../../utils/constant';

export const getItemFromUrl = (id) => {
  return {
    type: ITEM + GET,
    id,
  };
};

export const feedState = (item) => {
  return {
    type: ITEM + GET + SUCCESS,
    itemContent: item.content,
  };
};

export const getCommentsFromItem = (item) => {
  return {
    type: ITEM + COMMENT + GET,
    item,
  };
};
