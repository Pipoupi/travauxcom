import {GET, HOME, HOMEWITHOUT} from "../../utils/constant";

export const getHome = () => {
    return {
        type: HOME + GET
    }
};

export const getHomeWithoutSaga = () => {
    return {
        type: HOMEWITHOUT + GET
    }
}