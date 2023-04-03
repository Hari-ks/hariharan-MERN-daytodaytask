
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
   cartProducts: [],
   wishList: [],
   totalCount: 0
}

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {

      addToCart: (state, action) => {
         state.cartProducts.push(action.payload);
         state.totalCount += 1
      },
      addProductCount: (state, action) => {
         state.cartProducts.map((v, i) => {
            if (v.id === action.payload) {
               //console.log("count state", state.cartProducts[i].count)
               state.cartProducts[i].count += 1;
               state.totalCount += 1
            }
         })
      },
      decreaseProductCount: (state, action) => {
         state.cartProducts.map((v, i) => {
            if (v.id === action.payload) {
               // console.log("decrease state", state.cartProducts[i].count)
               if (v.count > 1)
                  v.count -= 1
               state.totalCount -= 1
            }
         })
      }
      ,
      removeFromCart: (state, action) => {
         state.cartProducts.splice(action.payload.itemIndex, 1);
         state.totalCount -= action.payload.count;
      },

      clearCart: (state, action) => {
         state.cartProducts.length = 0;
      },
      addTotalCount: (state, action) => {
         console.log("count", action)
         state.totalCount -= state.cartProducts[action.payload.index].count
         state.cartProducts[action.payload.index].count = action.payload.count
         state.totalCount += action.payload.count

      },
      addWishList: (state, action) => {
         state.wishList.push(action.payload)
      },
      clearTotalCount: (state, action) => {
         state.totalCount = 0
      },

      removeWishList: (state, action) => {
         const filterData = state.wishList.filter((item) => {
            console.log('action.payload', action.payload)
            console.log('item.id', item.id)
            return item.id !== action.payload;
         });
         state.wishList = filterData;
      }


   }
})

export const cartActions = cartSlice.actions;

const cardStore = configureStore({
   reducer: {
      cart: cartSlice.reducer
   }
})

export default cardStore;


