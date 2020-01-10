import { types } from '../actions/prospectsActions/viewActions';
const initStae={
    data:[],
    error:"",
    isLoading: false,
    undoneData:[],
    undoneError:"",
    undoneIsLoading: false
}

export const overProspectsList = (state = initStae, action) => {
    switch (action.type) {
        case types.PROSPECTS_OVER_LIST_LOADING:
            return { ...state,  isLoading: action.isLoading }
        case types.PROSPECTS_OVER_LIST_SUCCESS:
            return { ...state,  data: action.data }
        case types.PROSPECTS_OVER_LIST_ERROR:
            return { ...state,  error: action.error }
        default:
            return state
    }
}

export const undoneProspectsList = (state = initStae, action) => {
    switch (action.type) {
        case types.PROSPECTS_UNDONE_LIST_LOADING:
            return { ...state,  undoneIsLoading: action.undoneIsLoading }
        case types.PROSPECTS_UNDONE_LIST_SUCCESS:
            return { ...state,  undoneData: action.undoneData }
        case types.PROSPECTS_UNDONE_LIST_ERROR:
            return { ...state,  undoneError: action.undoneError }
        default:
            return state
    }
}

