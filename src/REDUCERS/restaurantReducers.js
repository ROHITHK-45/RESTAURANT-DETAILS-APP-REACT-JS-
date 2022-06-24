import {RESTAURANT_LIST_REQUEST,RESTAURANT_LIST_SUCESS,RESTAURANT_LIST_FAIL} from '../constants/restaurantconsants'





export const restaurantListReducer=(states={restaurants:[]},actions)=>{
    switch(actions.type){
        case RESTAURANT_LIST_SUCESS:
            return{restaurants:actions.payload}
        case RESTAURANT_LIST_FAIL:
            return{restaurants:actions.payload}
        default:return states        
    }
}