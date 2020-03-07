import SHOP_DATA_OBJ from './shop.data'

const INITIAL_STATE = {
  collections: SHOP_DATA_OBJ
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;