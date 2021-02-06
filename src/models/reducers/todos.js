import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  
  console.log('state', state)
  console.log('action', action)
  
  switch (action.type) {
    case ADD_TODO: {
    const {id, content} = action.payload
      console.log('id', id)
      console.log('content', content)
      console.log('000', {...state})

      return {
      ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            content,
            completed: false
          }
        }
      }
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      console.log('>>>', id)
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state?.byIds[id]?.completed
          }
        }
      };
    }
    default:
      return state;
  }
}
