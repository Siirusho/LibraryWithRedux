import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add item":
      return {
        ...state,
        items: [
          ...state.items,
          {
            name: action.payload.name,
            description: action.payload.description,
            auther: action.payload.auther,
            id: Math.random()
          }
        ]
      };

    case "del item":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      };

    case "edit item":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.payload.id) return { ...item };
          return {
            ...item,
            name: action.payload.newname,
            description: action.payload.newdescription,
            auther: action.payload.newauther
          };
        })
      };

    default:
      return state;
  }
};
export default reducer;
