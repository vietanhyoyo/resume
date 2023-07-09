export interface StoreState {
    mode: string;
}

const initialState: StoreState = {
    mode: 'light'
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            console.log('TOGGLE_MODE')
            return {
                ...state,
                mode: state.mode === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
};

export const toggleMode = () => {
    return {
        type: 'TOGGLE_MODE'
    };
};

export default reducer;
