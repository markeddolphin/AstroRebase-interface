import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

const SubCard = forwardRef(({ children, content, contentClass, secondary, sx = {}, contentSX = {}, ...others }, ref) => {
    const theme = useTheme();

    return (
        <Card
            ref={ref}
            sx={{
                // border: '1px solid',
                // borderColor: theme.palette.primary.light,
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                },
                background: 'rgba(90,70,255,.15)',
                borderRadius: '10px',
                boxSizing: 'border-box',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
                ...sx
            }}
            {...others}
        >
            {/* card content */}
            {content && (
                <CardContent sx={{ p: 2.5, ...contentSX, height: '100%', }} className={contentClass || ''}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
});

SubCard.propTypes = {
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    contentSX: PropTypes.object,
};

SubCard.defaultProps = {
    content: true
};

export default SubCard;
