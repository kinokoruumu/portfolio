import { connect } from 'react-redux'
import TabMenu from "../components/TabMenu.jsx"
import { change_menu } from '../actions/actionCreators/menu'

const mapStateToProps = state => {
    return {
        index: state.menu.index
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change_menu: index => {
            dispatch(change_menu(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu)