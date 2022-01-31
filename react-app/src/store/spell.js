const GET_ALL_SPELLS = "spells/GET_ALL_SPELLS"
const ADD_SPELL = "/spells/ADD_SPELL";
const UPDATE_SPELL = "spells/UPDATE_SPELL";
const DELETE_SPELL = "spells/DELETE_SPELL";
const CLEAR_SPELLS = "spells/CLEAR_SPELLS";

const loadAllSpells = (spells) => ({
  type: GET_ALL_SPELLS,
  spells,
});

const addSpell = (spell) => ({
  type: ADD_SPELL,
  spell,
});

const loadEditedSpell = (spell) => ({
  type: UPDATE_SPELL,
  spell,
});

const loadDeletedSpell = (spellId) => ({
  type: DELETE_SPELL,
  spellId,
});

const clearSpellState = () => ({
  type: CLEAR_SPELLS,
});

export const clearSpell = () => async (dispatch) => {
  dispatch(clearSpellState())
}

export const getAllSpells = (characterId) => async (dispatch) => {
    const res = await fetch(`/api/spells/${characterId}`);
    if (res.ok) {
      const spells = await res.json();
      dispatch(loadAllSpells(spells));
      return spells;
    }
};


export const createSpell = (payload) => async (dispatch) => {
  const res = await fetch(`/api/spells/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const spell = await res.json();
    dispatch(addSpell(spell));
    return spell;
  }
};


export const updateSpell = (payload, spellId) => async (dispatch) => {
    const res = await fetch(`/api/spells/${spellId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const spell = await res.json();
      dispatch(loadEditedSpell(spell));
      return spell
    }
};


export const deleteSpell = (spellId ) => async (dispatch) => {
    const res = await fetch(`/api/spells/${spellId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      const spellId = await res.json();
      dispatch(loadDeletedSpell(spellId));
    }
};

const initialState = {};

const spellReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_ALL_SPELLS:
      action.spells.forEach((spell) => {
        newState[spell.id] = spell;
      });
      return { ...state, ...newState };
    case ADD_SPELL:
      return { ...state, [action.spell.id]: action.spell };
    case UPDATE_SPELL:
      return { ...state, [action.spell.id]: action.spell };
    case DELETE_SPELL:
      newState = { ...state };
      delete newState[action.spellId];
      return { ...newState };
    case CLEAR_SPELLS:
      return {};
    default:
      return state;
  }
};

export default spellReducer;