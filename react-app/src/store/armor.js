const GET_ALL_ARMORS = "armors/GET_ALL_ARMORS"
const ADD_ARMOR = "armors/ADD_ARMOR";
const UPDATE_ARMOR = "armors/UPDATE_ARMOR";
const DELETE_ARMOR = "armors/DELETE_ARMOR";
const CLEAR_ARMORS = "armors/CLEAR_ARMORS";

const loadAllArmors = (armors) => ({
  type: GET_ALL_ARMORS,
  armors,
});

const addArmor = (armor) => ({
  type: ADD_ARMOR,
  armor,
});

const loadEditedArmor = (armor) => ({
  type: UPDATE_ARMOR,
  armor,
});

const loadDeletedArmor = (armorId) => ({
  type: DELETE_ARMOR,
  armorId,
});

const clearArmorState = () => ({
  type: CLEAR_ARMORS,
});

export const clearArmor = () => async (dispatch) => {
  dispatch(clearArmorState())
}

export const getAllArmors = (characterId) => async (dispatch) => {
  const res = await fetch(`/api/armors/${characterId}`);
  if (res.ok) {
    const armors = await res.json();
    dispatch(loadAllArmors(armors));
    return armors;
  }
};


export const createArmor = (payload) => async (dispatch) => {
  const res = await fetch(`/api/armors/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const armor = await res.json();
    dispatch(addArmor(armor));
    return armor;
  }
};


export const updateArmor = (payload, armorId) => async (dispatch) => {
  const res = await fetch(`/api/armors/${armorId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const armor = await res.json();
    dispatch(loadEditedArmor(armor));
    return armor
  }
};


export const deleteArmor = (armorId) => async (dispatch) => {
  const res = await fetch(`/api/armors/${armorId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });

  if (res.ok) {
    const armorId = await res.json();
    dispatch(loadDeletedArmor(armorId));
  }
};

const initialState = {};

const armorReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_ALL_ARMORS:
      action.armors.forEach((armor) => {
        newState[armor.id] = armor;
      });
      return { ...state, ...newState };
    case ADD_ARMOR:
      return { ...state, [action.armor.id]: action.armor };
    case UPDATE_ARMOR:
      return { ...state, [action.armor.id]: action.armor };
    case DELETE_ARMOR:
      newState = { ...state };
      delete newState[action.armorId];
      return { ...newState };
    case CLEAR_ARMORS:
      return {};
    default:
      return state;
  }
};

export default armorReducer;