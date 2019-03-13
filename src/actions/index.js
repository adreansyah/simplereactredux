export const activateGeod = geod => {  
    return ({
        type: 'ACTIVATE_GEOD',
        geod,
    });
};

export const closeGeod = () => {    
    return({
        type: 'CLOSE_GEOD',
    });
};

export const tests = (item) =>{        
    return async(dispatch,getState) => {
        const rawResponse = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const content = await rawResponse.json();       
        dispatch({
            type:'CALL_TEST',
            payload:content
        })
    }
}

export const tests2  = (item)=>{
    return async(dispatch,getState) => {
        const rawResponse = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const content = await rawResponse.json();       
        dispatch({
            type:'CALL_TEST2',
            payload:content
        })
    }
}