import { getData } from '../../utils/cAxios';
/*
 * action 类型
 */

// action types
export const types = {
  PROSPECTS_OVER_LIST_SUCCESS: "PROSPECTS_OVER_LIST_SUCCESS", // Request over prospects List data
  PROSPECTS_OVER_LIST_ERROR: "PROSPECTS_OVER_LIST_ERROR",  //   Request over prospects error
  PROSPECTS_OVER_LIST_LOADING: "PROSPECTS_OVER_LIST_LOADING",  // over Loading...
  PROSPECTS_UNDONE_LIST_SUCCESS: "PROSPECTS_UNDONE_LIST_SUCCESS", // Request undone prospects List data
  PROSPECTS_UNDONE_LIST_ERROR: "PROSPECTS_UNDONE_LIST_ERROR",  //   Request undone prospects error
  PROSPECTS_UNDONE_LIST_LOADING: "PROSPECTS_UNDONE_LIST_LOADING"  // undone Loading...
};

const initState={
  data:[],
  error:"",
  isLoading: false,
  undoneData:[],
  undoneError:"",
  undoneIsLoading: false
}

/*
 * action 创建函数
 */

export function requestSuccess(actionType, data){
  return {
      ...initState,
      type:actionType,
      data: data
  }
}

export  function requestError (actionType, error){
  return {
      ...initState,
      type:actionType,
      error: error
  }
}

export  function isLoading (actionType, isLoading){
  return {
      ...initState,
      type:actionType,
      isLoading: isLoading
  }
}

export function requestUndoneSuccess(actionType, data){
  return {
      ...initState,
      type:actionType,
      undoneData: data
  }
}

export  function requestUndoneError (actionType, error){
  return {
      ...initState,
      type:actionType,
      undoneError: error
  }
}

export  function undoneIsLoading (actionType, isLoading){
  return {
      ...initState,
      type:actionType,
      undoneIsLoading: isLoading
  }
}

export function getProspectsOverList (){
  return (dispatch, getState) => {
     dispatch(isLoading(types.PROSPECTS_OVER_LIST_LOADING, true ));
     return getData("48List").then( res => {
            const result = res.data;
            if (result) {
                return result
            } else {
         
            }
          }).then( json =>{
                 dispatch(requestSuccess(types.PROSPECTS_OVER_LIST_SUCCESS, json ));
          } ).finally(() => {
            dispatch(isLoading(types.PROSPECTS_OVER_LIST_LOADING, false ));
          })
  };
}

export function getProspectsUndoneList (){
  return (dispatch, getState) => {
     dispatch(undoneIsLoading(types.PROSPECTS_UNDONE_LIST_LOADING, true ));
    //  return getData("48list").then( res => {
    //         const result = res.data;
    //         if (result) {
    //             return result
    //         } else {
         
    //         }
    //       }).then( json =>{
    //           dispatch(requestUndoneSuccess(types.PROSPECTS_UNDONE_LIST_SUCCESS, json ));
    //       } ).finally(() => {
    //         dispatch(undoneIsLoading(types.PROSPECTS_UNDONE_LIST_LOADING, false ));
    //       })
  };
}