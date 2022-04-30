// assets
import { IconChartPie, IconRocket, IconChartLine, IconSettings, IconArrowsShuffle } from '@tabler/icons';
import GridViewIcon from '@mui/icons-material/GridView';

const icons = { IconRocket, GridViewIcon, IconChartPie, IconChartLine, IconSettings, IconArrowsShuffle };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const items = {
    id: 'menu-items',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: 'https://100daysventures.com/',
            icon: icons.IconRocket,
            external: true,
            breadcrumbs: false
        },
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.GridViewIcon,
            breadcrumbs: false
        },
        {
            id: 'account',
            title: 'Your Account',
            type: 'item',
            url: '/account',
            icon: icons.IconChartPie,
            breadcrumbs: false
        },
        {
            id: 'swap',
            title: 'Buy / Swap',
            type: 'item',
            url: '/swap',
            icon: icons.IconArrowsShuffle,
            breadcrumbs: false
        },
    ]
};

const items_2 = {
    id: 'menu-items-2',
    type: 'group',
    children: [
        {
            id: 'dexcharts',
            title: 'Dex Charts',
            type: 'item',
            url: 'https://traderjoexyz.com/trade?inputCurrency=AVAX&outputCurrency=0x9a542e3Dfb16B65F954dF8FeEFB37F4e8ff833cC',
            icon: icons.IconChartLine,
            external: true,
            breadcrumbs: false
        },
        {
            id: 'docs',
            title: 'Docs',
            type: 'item',
            url: 'https://100-days-1.gitbook.io/whitepaper/',
            icon: icons.IconSettings,
            external: true,
            breadcrumbs: false
        },
    ]
};

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [items, items_2]
};

export default menuItems;
