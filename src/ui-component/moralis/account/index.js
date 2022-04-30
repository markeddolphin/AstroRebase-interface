import { useState } from "react";
import { useMoralis } from "react-moralis";

import { Dialog, DialogContent, Typography, Grid, ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

import { getEllipsisTxt } from "utils/formatters";
import { connectors } from "./config";

import WALLET_IMAGE from 'assets/images/astro/wallet.png';

function Account() {
    const { authenticate, isAuthenticated, account, chainId, logout } = useMoralis();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onClose = () => {
        setIsModalVisible(false);
    }
    const onOpen = () => {
        setIsModalVisible(true);
    }

    if (!isAuthenticated || !account) {
        return (
            <>
                <ButtonBase
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '44px',
                        padding: '10px 30px',
                        background: '#1e243e',
                        borderRadius: '8px',
                        alignItems: 'center'
                    }}
                    onClick={onOpen}
                >
                    <Grid sx={{ display: 'flex' }}>
                        <img alt='wallet' width={24} src={WALLET_IMAGE} />
                        <Typography sx={{
                            marginLeft: '8px',
                            fontSize: '16px'
                        }}>Connect</Typography>
                    </Grid>
                </ButtonBase>

                <Dialog open={isModalVisible} onClose={onClose} fullWidth={true} maxWidth={'sm'}>
                    <DialogContent sx={{
                        background: '#273138',
                        padding: 0,
                        borderRadius: '12px'
                    }}>
                        {connectors.map(({ title, icon, connectorId }, key) => (
                            <Grid key={key} sx={{
                                padding: '8px',
                                width: 1,
                                border: 'solid 1px #c3c3c324'
                            }}>
                                <ButtonBase
                                    onClick={async () => {
                                        try {
                                            await authenticate({ provider: connectorId });
                                            window.localStorage.setItem("connectorId", connectorId);
                                            setIsModalVisible(false);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }}
                                    fullWidth={true}
                                    sx={{
                                        paddingY: '20px',
                                        width: 1,
                                        borderRadius: '12px',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Grid sx={{ width: 1, textAlign: 'center' }}>
                                        <img src={icon} alt={title} width={'45px'} />
                                    </Grid>
                                    <Typography component={'div'} sx={{ fontSize: '24px', marginTop: '10px' }}>
                                        {title}
                                    </Typography>
                                    <Typography component={'div'} sx={{ fontSize: '18px', marginTop: '8px' }}>
                                        {title === 'Metamask' && 'Connect to your MetaMask Wallet'}
                                        {title === 'WalletConnect' && 'Scan with WalletConnect to connect'}
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                        ))}
                    </DialogContent>
                </Dialog>
            </>
        );
    }
    
    return (
        <>
            <ButtonBase
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '62px',
                    padding: '10px 30px',
                    background: '#1e243e',
                    borderRadius: '8px',
                    alignItems: 'center'
                }}
                onClick={async () => {
                    await logout();
                    window.localStorage.removeItem("connectorId");
                }}
            >
                <Grid sx={{ display: 'flex' }}>
                    <img alt='wallet' width={24} src={WALLET_IMAGE} />
                    <Typography sx={{
                        marginLeft: '8px',
                        fontSize: '16px'
                    }}>{getEllipsisTxt(account, 5, 3)}</Typography>
                </Grid>
                <Typography>Disconnect</Typography>
            </ButtonBase>
        </>
    )
}

export default Account;
