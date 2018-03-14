import React from 'react'
import MobilePortFolioLineContainer from './MobilePortFolioLineContainer.jsx'

const portFolios = {
    More: [
        {
            title: "title page",
            image: "./src/images/More/TitlePage.png"
        },
        {
            title: "shops page",
            image: "./src/images/More/ShopsPage.png"
        },
        {
            title: "shop detail page",
            image: "./src/images/More/ShopDetailPage.png"
        },
        {
            title: "route page",
            image: "./src/images/More/RoutePage.png"
        },
        {
            title: "navigation",
            image: "./src/images/More/Navigation.png"
        },
        {
            title: "my page",
            image: "./src/images/More/MyPage.png"
        }
    ],
    hiromee: [
        {
            title: "title page",
            image: "./src/images/hiromee/TitlePage.png"
        },
        {
            title: "events page",
            image: "./src/images/hiromee/EventsPage.png"
        },
        {
            title: "joined events page",
            image: "./src/images/hiromee/JoinedEventsPage.png"
        },
        {
            title: "message rooms page",
            image: "./src/images/hiromee/MessageRoomsPage.png"
        },
        {
            title: "user profile page",
            image: "./src/images/hiromee/UserProfilePage.png"
        },
        {
            title: "recieved invitation page",
            image: "./src/images/hiromee/RecievedInvitationPage.png"
        },
    ],
    HalApplication: [
        {
            title: "title page",
            image: "./src/images/HalApplication/TitlePage.png"
        },
        {
            title: "tasks page",
            image: "./src/images/HalApplication/TasksPage.png"
        },
        {
            title: "task detail page",
            image: "./src/images/HalApplication/TaskDetailPage.png"
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
                    <MobilePortFolioLineContainer data={portFolios[key]}/>
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