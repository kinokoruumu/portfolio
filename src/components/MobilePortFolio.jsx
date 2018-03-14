import React from 'react'

export default class MobilePortFolio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, image } = this.props.data
        return (
            <div style={styles.container}>
                <div style={styles.imageContainer}>
                    <img
                        style={styles.image}
                        src={image ? image : "./src/images/NoImage.png"}
                    />
                </div>
                <div style={styles.titleContainer}>
                    <p style={styles.title}>{title}</p>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        position: "relative",
        width: "250px",
        height: "430px",
        boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12)",
        overflow: "hidden"
    },
    imageContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
    },
    image: {
        display: "block",
        width: "100%"
    },
    titleContainer: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        padding: "1rem 0",
        backgroundColor: "#FFF"
    },
    title: {
        textAlign: "center"
    }
}