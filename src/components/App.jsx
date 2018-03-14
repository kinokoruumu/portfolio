import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/configureStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./Header.jsx"
import PortFoliosContainer from "../containers/PortFoliosContainer"

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#2a2f49",
    }
})

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <div style={{backgroundColor: "#FAFAFB"}}>
                <Header/>
                <PortFoliosContainer/>
            </div>
        </Provider>
    </MuiThemeProvider>
)

export default App