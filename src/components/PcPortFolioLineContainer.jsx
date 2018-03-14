import React from 'react'
import PcPortFolio from './PcPortFolio.jsx'

export default class PcPortFolioLineContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props
        const listItems = data.map((data, key) => <li key={key} style={styles.list}><PcPortFolio data={data}/></li>)
        return (
            <div style={styles.container}>
                <ul style={styles.portFoliosContainer}>{listItems}</ul>
                <div style={styles.arrow}>
                    <img
                        style={styles.image}
                        src="./src/images/arrow.png"
                    />
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        position: "relative"
    },
    portFoliosContainer: {
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap"
    },
    list: {
        listStyle: "none",
        display: "inline-block",
        marginRight: "30px"
    },
    arrow: {
        position: "absolute",
        top: "50%",
        right: "-50px",
        width: "40px",
        paddingLeft: "10px",
        transform: "translateY(-50%)"
    },
    image: {
        display: "block",
        width: "100%"
    }
}