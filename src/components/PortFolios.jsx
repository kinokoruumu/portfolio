import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import MobilePortFolios from './MobilePortFolios.jsx'
import PcPortFolios from './PcPortFolios.jsx'

export default class PortFolios extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SwipeableViews
                index={this.props.index}
                onChangeIndex={(index) => this.props.change_menu(index)}
            >
                <PcPortFolios/>
                <MobilePortFolios/>
            </SwipeableViews>
        )
    }
}