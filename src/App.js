import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Routes from 'routes';

import themes from 'themes';
import NavigationScroll from 'layout/NavigationScroll';

import { MoralisProvider } from "react-moralis";

import { AstroMoralisProvider } from 'hooks/useAstroMoralis';
import { DataServiceProvider } from 'hooks/useDataService';

// const APP_ID = 'A4qAxwZeN4amP0v4JFiqnAGFxsJRhOu4rCoDCDdQ';
// const SERVER_URL = 'https://v1itj0kwswny.usemoralis.com:2053/server';

const APP_ID = 'd2384pFLUIXl50qhFvU75Vtn5bHXf9Lknbxx1Oi0';
const SERVER_URL = 'https://dsmlteqxlkxz.usemoralis.com:2053/server';
// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;


const App = () => {
    const customization = useSelector((state) => state.customization);

    const isServerInfo = APP_ID && SERVER_URL ? true : false;

    if (!APP_ID || !SERVER_URL)
        throw new Error(
            "Missing Moralis Application ID or Server URL. Make sure to set your .env file.",
        );
    if (isServerInfo)
        return (
            <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL} initializeOnMount={true}>
                <AstroMoralisProvider>
                    <DataServiceProvider>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themes(customization)}>
                                <CssBaseline />
                                <NavigationScroll>
                                    <Routes />
                                </NavigationScroll>
                            </ThemeProvider>
                        </StyledEngineProvider>
                    </DataServiceProvider>
                </AstroMoralisProvider>
            </MoralisProvider>
        );
    else {
        return (
            <>
                Internal Error.
            </>
        );
    }
};

export default App;
