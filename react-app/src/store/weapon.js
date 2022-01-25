const GET_ALL_WEAPONS = "weapons/GET_ALL_WEAPONS"
const ADD_WEAPON = "/weapons/ADD_WEAPON";
const UPDATE_WEAPON = "weapons/UPDATE_WEAPON";
const DELETE_WEAPON = "weapons/DELETE_WEAPON";

const loadAllWeapons = (weapons) => ({
  type: GET_ALL_WEAPONS,
  weapons,
});

const addWeapon = (weapon) => ({
  type: ADD_WEAPON,
  weapon,
});

const loadEditedWeapon = (weapon) => ({
  type: UPDATE_WEAPON,
  weapon,
});

const loadDeletedWeapon = (weaponId) => ({
  type: DELETE_WEAPON,
  weaponId,
});

export const getAllWeapons = (characterId) => async (dispatch) => {
    const res = await fetch(`/api/weapons/${characterId}`);
    if (res.ok) {
      const weapons = await res.json();
      dispatch(loadAllWeapons(weapons));
      return weapons;
    }
};


export const createWeapon = (payload) => async (dispatch) => {
  const res = await fetch(`/api/weapons/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const weapon = await res.json();
    dispatch(addWeapon(weapon));
    return weapon;
  }
};


export const updateWeapon = (payload, weaponId) => async (dispatch) => {
    const res = await fetch(`/api/weapons/${weaponId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const weapon = await res.json();
      dispatch(loadEditedWeapon(weapon));
      return weapon
    }
};


export const deleteWeapon = (weaponId ) => async (dispatch) => {
    const res = await fetch(`/api/weapons/${weaponId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      const weaponId = await res.json();
      dispatch(loadDeletedWeapon(weaponId));
    }
};

const initialState = {};

const weaponReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_ALL_WEAPONS:
      action.weapons.forEach((weapon) => {
        newState[weapon.id] = weapon;
      });
      return { ...state, ...newState };
    case ADD_WEAPON:
      return { ...state, [action.weapon.id]: action.weapon };
    case UPDATE_WEAPON:
      return { ...state, [action.weapon.id]: action.weapon };
    case DELETE_WEAPON:
      newState = { ...state };
      delete newState[action.weaponId];
      return { ...newState };
    default:
      return state;
  }
};

export default weaponReducer;