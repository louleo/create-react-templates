import {DataSource} from "../data/data-sources";
import {actionTypes} from "./action-types";

const dataSource = new DataSource();

const incrementData = (res)=>{
    return {
        type:actionTypes.INCREMENT,
        payload:res
    }
};

const decrementData = (res)=>{
    return {
        type:actionTypes.DECREMENT,
        payload:res
    }
}

const clearData = (res)=>{
    return {
        type:actionTypes.CLEAR,
        payload:res
    }
}

const initData = (res)=>{
    return {
        type:actionTypes.INIT,
        payload:res
    }
}

export const incrementDataAction = (data)=>{
    return (dispatch) => (dataSource.increment(data).then((res)=>{console.log(res);dispatch(incrementData(res))}));
}


export const decrementDataAction = (data)=>{
    return (dispatch) => (dataSource.decrement(data).then((res)=>dispatch(decrementData(res))));
}

export const initDataAction = (data)=>{
    return (dispatch) => (dataSource.init().then((res)=>dispatch(initData(res))));
}

export const clearDataAction = (data)=>{
    return (dispatch) => (dataSource.clear().then((res)=>dispatch(clearData(res))));
}
