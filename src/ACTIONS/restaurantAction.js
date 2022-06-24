import {RESTAURANT_LIST_REQUEST,RESTAURANT_LIST_SUCESS,RESTAURANT_LIST_FAIL} from '../constants/restaurantconsants'
import axios from 'axios'

export const listRestaurants =()=> async (dispatch)=>{
    try{
    const {data}=await axios.get('./restaurants.json')
    dispatch({
        type:RESTAURANT_LIST_SUCESS,payload:data.restaurants
    })
    }catch (error){
        dispatch({
            type:RESTAURANT_LIST_FAIL,payload:error
        })

    }
}