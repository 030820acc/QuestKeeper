
const GET_ALL_CHARACTERS = "characters/GET_ALL_CHARACTERS"
const ADD_CHARACTER = "/characters/ADD_CHARACTER";
const UPDATE_CHARACTER = "characters/UPDATE_CHARACTER";
const DELETE_CHARACTER = "characters/DELETE_CHARACTER";

const loadAllCharacters = (characters) => ({
  type: GET_ALL_CHARACTERS,
  characters,
});

const addCharacter = (character) => ({
  type: ADD_CHARACTER,
  character,
});

const loadEditedCharacter = (character) => ({
  type: UPDATE_CHARACTER,
  character,
});

const loadDeletedCharacter = (characterId) => ({
  type: DELETE_CHARACTER,
  characterId,
});

export const getAllCharacters = (userId) => async (dispatch) => {
    const res = await fetch(`/api/characters/${userId}`);
    if (res.ok) {
      const characters = await res.json();
      dispatch(loadAllCharacters(characters));
      return characters;
    }
};


export const createCharacter = (payload) => async (dispatch) => {
  const res = await fetch(`/api/characters/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const character = await res.json();
    dispatch(addCharacter(character));
    return character;
  }
};


export const updateCharacter = (payload, characterId) => async (dispatch) => {
    const res = await fetch(`/api/characters/${characterId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const character = await res.json();
      dispatch(loadEditedCharacter(character));
    }
};


export const deleteCharacter = (characterId ) => async (dispatch) => {
    const res = await fetch(`/api/characters/${characterId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      const characterId = await res.json();
      dispatch(loadDeletedCharacter(characterId));
    }
};

const initialState = {};

const characterReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_ALL_CHARACTERS:
      action.characters.forEach((character) => {
        newState[character.id] = character;
      });
      return { ...state, ...newState };
    case ADD_CHARACTER:
      return { ...state, [action.character.id]: action.character };
    case UPDATE_CHARACTER:
      return { ...state, [action.character.id]: action.character };
    case DELETE_CHARACTER:
      newState = { ...state };
      delete newState[action.characterId];
      return { ...newState };
    default:
      return state;
  }
};

export default characterReducer;