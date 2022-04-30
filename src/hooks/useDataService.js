import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ASTRO_PRICE_URL = 'https://api.traderjoexyz.com/priceusd/0x9a542e3Dfb16B65F954dF8FeEFB37F4e8ff833cC';
const TOTAL_HOLDERS_URL = 'https://api.covalenthq.com/v1/43114/tokens/0x9a542e3Dfb16B65F954dF8FeEFB37F4e8ff833cC/token_holders/?quote-currency=USD&format=JSON&page-size=1000000000&key=ckey_4692876c71644fb1b93abfae7f9';

const DataServiceContext = createContext(null);

export default function useDataService() {
    const [{ loading, astroPrice, holdersCount }] = useContext(DataServiceContext);
    return [{ loading, astroPrice, holdersCount }]
}

export const DataServiceProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [astroPrice, setAstroPrice] = useState(0);
    const [holdersCount, setHoldersCount] = useState(0);

    const getAstroPrice = async () => {
        setLoading(true);
        try {
            const { data: response } = await axios.get(ASTRO_PRICE_URL);
            setAstroPrice(response);
            setLoading(false);
        } catch (error) {
            console.error(error)
        }
    };

    const getTotalHolders = async () => {
        setLoading(true);
        try {
            const { data: response } = await axios.get(TOTAL_HOLDERS_URL);
            setHoldersCount(response.data.pagination.total_count);
            setLoading(false);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        getAstroPrice();
        getTotalHolders();
    }, []);

    return <DataServiceContext.Provider
        value={[{ loading, astroPrice, holdersCount }]}>
        {children}
    </DataServiceContext.Provider>
};