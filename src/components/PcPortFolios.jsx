import React from 'react'
import PcPortFolioLineContainer from './PcPortFolioLineContainer.jsx'

const portFolios = {
    RAGEBLUE: [
        {
            title: "top page",
            image: "./src/images/RAGEBLUE/TopPage.png"
        },
        {
            title: "top page styling",
            image: "./src/images/RAGEBLUE/Styling.png"
        },
        {
            title: "top page category",
            image: "./src/images/RAGEBLUE/Category.png"
        },
        {
            title: "items page",
            image: "./src/images/RAGEBLUE/ItemsPage.png"
        },
        {
            title: "item detail page",
            image: "./src/images/RAGEBLUE/ItemDetailPage.png"
        },
        {
            title: "ranking page",
            image: "./src/images/RAGEBLUE/RankingPage.png"
        },
        {
            title: "navigation",
            image: "./src/images/RAGEBLUE/Navigation.png"
        },
        {
            title: "cart page",
            image: "./src/images/RAGEBLUE/CartPage.png"
        },
    ],
    TaikiKatsuramaki: [
        {
            title: "title",
            image: "./src/images/TaikiKatsuramaki/Title.png"
        },
        {
            title: "message",
            image: "./src/images/TaikiKatsuramaki/Message.png"
        },
        {
            title: "profile",
            image: "./src/images/TaikiKatsuramaki/Profile.png"
        },
        {
            title: "portfolio",
            image: "./src/images/TaikiKatsuramaki/PortFolio.png"
        }
    ],
    GoTemplate: [
        {
            title: "top page",
            image: "./src/images/GoTemplate/TopPage.png"
        }
    ],
    espace: [
        {
            title: "title",
            image: "./src/images/espace/Title.png"
        },
        {
            title: "concept",
            image: "./src/images/espace/Concept.png"
        },
        {
            title: "menu",
            image: "./src/images/espace/Menu.png"
        },
        {
            title: "footer",
            image: "./src/images/espace/Footer.png"
        }
    ],
    sakurayu: [
        {
            title: "bath rooms",
            image: "./src/images/sakurayu/BathRooms.png"
        },
        {
            title: "spa",
            image: "./src/images/sakurayu/Spa.png"
        },
        {
            title: "rooms",
            image: "./src/images/sakurayu/Rooms.png"
        }
    ]
}

export default class MobilePortFolios extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const listItems = Object.keys(portFolios).map((key) => {
            return (
                <li
                    key={key}
                    style={styles.list}
                >
                    <h2 style={styles.title}>{key}</h2>
                    <PcPortFolioLineContainer data={portFolios[key]}/>
                </li>
            )
        })
        return (
            <div style={styles.container}>
                <ul style={styles.ul}>{listItems}</ul>
            </div>
        )
    }
}

const styles = {
    container: {
        minHeight: "100vh",
        backgroundColor: "#FAFAFB",
    },
    ul: {
        width: "1100px",
        margin: "0 auto",
        padding: "2rem 0",
    },
    list: {
        listStyle: "none",
        padding: "1.5rem 0"
    },
    title: {
        borderBottom: "1px solid #9DA09E",
        marginBottom: "1.5rem"
    }
}