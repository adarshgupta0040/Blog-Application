const crud = (state = { items: [] }, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case "DELETE_BLOG":
            return {
                ...state,
                items: state.items.filter((blogs) => blogs.title !== action.payload)

            }

        case "UPDATE_BLOG":
            const updatedItems = state.items.map((item) =>
                item.title === action.payload.title ? action.payload : item
            );
            return {
                ...state,
                items: updatedItems,
            }
        default:
            return state;

    }
};

export default crud;