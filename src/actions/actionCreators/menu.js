import { CHANGE_MENU } from '../actionTypes/menu'

export const change_menu = index => {
    return {
        type: CHANGE_MENU,
        index
    }
}