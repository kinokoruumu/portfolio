import { CHANGE_MENU } from '../../actions/actionTypes/menu'

const initialState = {
    index: 0
}

export function menu(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MENU:
            return Object.assign({}, state, {
                index: action.index
            })
        default:
            return state
    }
}