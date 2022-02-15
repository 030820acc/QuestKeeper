const GET_ALL_ITEMS = "items/GET_ALL_ITEMS"
const ADD_ITEM = "items/ADD_ITEM";
const UPDATE_ITEM = "items/UPDATE_ITEM";
const DELETE_ITEM = "items/DELETE_ITEM";
const CLEAR_ITEMS = "items/CLEAR_ITEMS";

const loadAllItems = (items) => ({
  type: GET_ALL_ITEMS,
  items,
});

const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

const loadEditedItem = (item) => ({
  type: UPDATE_ITEM,
  item,
});

const loadDeletedItem = (itemId) => ({
  type: DELETE_ITEM,
  itemId,
});

const clearItemsState = () => ({
  type: CLEAR_ITEMS,
});

export const clearItem = () => async (dispatch) => {
  dispatch(clearItemsState())
}

export const getAllItems = (characterId) => async (dispatch) => {
  const res = await fetch(`/api/items/${characterId}`);
  if (res.ok) {
    const items = await res.json();
    dispatch(loadAllItems(items));
    return items;
  }
};


export const createItem = (payload) => async (dispatch) => {
  const res = await fetch(`/api/items/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const item = await res.json();
    dispatch(addItem(item));
    return item;
  }
};


export const updateItem = (payload, itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const item = await res.json();
    dispatch(loadEditedItem(item));
    return item
  }
};


export const deleteItem = (itemId) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });

  if (res.ok) {
    const itemId = await res.json();
    dispatch(loadDeletedItem(itemId));
  }
};

const initialState = {};

const itemReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_ALL_ITEMS:
      action.items.forEach((item) => {
        newState[item.id] = item;
      });
      return { ...state, ...newState };
    case ADD_ITEM:
      return { ...state, [action.item.id]: action.item };
    case UPDATE_ITEM:
      return { ...state, [action.item.id]: action.item };
    case DELETE_ITEM:
      newState = { ...state };
      delete newState[action.itemId];
      return { ...newState };
    case CLEAR_ITEMS:
      return {};
    default:
      return state;
  }
};

export default itemReducer;