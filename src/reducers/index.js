import { combineReducers } from 'redux';

export const geod = (state = {}, action) => {         
    switch (action.type) {
        case 'ACTIVATE_GEOD':      
            return action.geod;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};

export const test = (state = [],action)=>{   
    // console.log();
    switch(action.type){
        case 'CALL_TEST':
            return action.payload
        default:
            return state;
    }
}

export const test2 = (state = [],action)=>{   
    switch(action.type){
        case 'CALL_TEST2':
            return action.payload
        default:
            return state;
    }
}

export const reducers = combineReducers({
    geod,
    test,
    test2
});