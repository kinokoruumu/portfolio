import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Tabs
                contentContainerStyle={styles.container}
                onChange={(value) => this.props.change_menu(value)}
                value={this.props.index}
            >
                <Tab label="PC" value={0} />
                <Tab label="Mobile" value={1} />
            </Tabs>
        )
    }
}

const styles = {
    container: {
        backgroundColor: "#2A2F49"
    }
}