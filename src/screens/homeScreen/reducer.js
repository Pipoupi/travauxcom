import {GET, HOME, HOMEWITHOUT, SUCCESS} from "../../utils/constant";

const home = (state = [], action) => {
    switch(action.type) {
        case HOME + GET + SUCCESS: {
            return [...state, 'test1', 'test2']
        }
        case HOMEWITHOUT + GET: {
            const i = state.length + 1;
            return [...state, 'test'+i]
        }
        default: {
            return state;
        }
    }
};

export default home;