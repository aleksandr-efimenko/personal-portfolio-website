export const tagsReducerInitialState = {
  tagsFilter: [] as string[],
};

export type TagsReducerActionType = {
  type: "ADD_OR_REMOVE_TAG" | "RESET_TAGS";
  payload: string;
};

export function tagsReducer(
  state: typeof tagsReducerInitialState,
  action: TagsReducerActionType
) {
  console.log(action);
  switch (action.type) {
    case "ADD_OR_REMOVE_TAG":
      if (state.tagsFilter.includes(action.payload)) {
        return {
          ...state,
          tagsFilter: state.tagsFilter.filter((tag) => tag !== action.payload),
        };
      } else {
        return {
          ...state,
          tagsFilter: [...state.tagsFilter, action.payload],
        };
      }
    case "RESET_TAGS":
      return {
        ...state,
        tagsFilter: [],
      };
    default:
      return state;
  }
}
