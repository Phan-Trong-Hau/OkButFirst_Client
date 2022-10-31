import api from "../../utils/apiCaller";
// import * as Types from "../constants/ActionTypes";
import productsSlice from "../reducer/products";


export const actFetchProductsRequest = () => {
    return async (dispatch) => {
        const res = await api.get('/v1/products');
        dispatch(productsSlice.actions.fetchProducts(res.data));
    }
}

// export const actFetchProducts = (products) => {
//     return {
//         type: Types.FETCH_PRODUCTS,
//         payload: products,
//     };
// };
