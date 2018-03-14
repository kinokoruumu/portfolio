import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import TabMenuContainer from '../containers/TabMenuContainer'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0,
        }
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        })
    }

    render() {

        return (
            <div style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>Port Folio</h1>
                    <nav style={styles.nav}>
                        <TabMenuContainer/>
                    </nav>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        minHeight: "150px",
        backgroundColor: "#2a2f49"
    },
    content: {
        width: "1100px",
        margin: "0 auto"
    },
    title: {
        padding: "2rem 1rem",
        color: "#FFF",
        fontWeight: "normal"
    },
    nav: {
        width: "400px"
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
}