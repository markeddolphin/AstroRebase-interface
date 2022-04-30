import {
    Grid,
    Typography,
    ButtonBase,
    Button,
    FormControl,
    Select,
    MenuItem
} from '@mui/material';
import avaxIcon from 'assets/images/astro/avax.png';
import usdcIcon from 'assets/images/astro/usdc.png';
import astroIcon from 'assets/images/astro/astro-icon.png';

const Tokenmodal = () => (
    <Grid sx={{background: '#151b34', borderRadius: '10px', padding: '10px 0', position: 'absolute'}}>
        <MenuItem value={0} sx={{}}>
            <Grid sx={{ display: 'flex' }}>
                <img src={avaxIcon} style={{ width: '30px', height: '30px' }} />
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginLeft: '8px',
                    color: 'white'
                }}>AVAX</Typography>
            </Grid>
        </MenuItem>
        <MenuItem value={1} sx={{}}>
            <Grid sx={{ display: 'flex' }}>
                <img src={usdcIcon} style={{ width: '30px', height: '30px' }} />
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginLeft: '8px',
                    color: 'white'
                }}>USDC</Typography>
            </Grid>
        </MenuItem>
    </Grid>
);

export default Tokenmodal;
