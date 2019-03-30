import { modal } from '../constants/ModalPaper.constants';

const initialState = {
    modalList: [],
    modalListLoading: false,
    modalListError: null,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){

    case modal.MODAL_LIST_LOADING: 
        return { ...state, modalListLoading: true }
    case modal.MODAL_LIST_SUCCESS:
        return { ...state, modalList: action.payload, modalListLoading: false }
    case modal.MODAL_LIST_FAILURE: 
        return { ...state, modalList: [], modalListError: action.payload, modalListLoading: false }
    default :
        return state
    }  
};

export default reducer;