import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';

// constant
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        },
        ref
    ) => {
        const theme = useTheme();

        return (
            <>
                <Grid sx={{ height: '26px' }}>
                    <Typography variant="h3" component="div" sx={{ marginLeft: '1.5rem', fontFamily: "Century Gothic, sans-serif" }}>
                        {title}
                    </Typography>
                </Grid>
                <Card
                    ref={ref}
                    {...others}
                    sx={{
                        background: "rgba(0,0,0,.2)", 
                        border: "1.5px solid rgba(140,145,255,.15)", 
                        padding: "10px 0",
                        // ':hover': {
                        //     boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                        // },
                        // '& > .MuiCardContent-root': {
                        //     padding: '12px 0 !important',
                        // },
                        // ...sx
                    }}
                >
                    {/* card header and action */}
                    {/* {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
                    {darkTitle && title && (
                        <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
                    )} */}

                    {/* content & header divider */}
                    {/* {title && <Divider />} */}

                    {/* card content */}
                    {content && (
                        <CardContent sx={{padding: "0px !important"}} className={contentClass}>
                            {children}
                        </CardContent>
                    )}
                    {!content && children}
                </Card>
                <Grid sx={{ marginTop: '1.5rem' }}></Grid>
            </>
        );
    }
);

MainCard.propTypes = {
    border: PropTypes.bool,
    boxShadow: PropTypes.bool,
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    contentSX: PropTypes.object,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    shadow: PropTypes.string,
    sx: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default MainCard;
