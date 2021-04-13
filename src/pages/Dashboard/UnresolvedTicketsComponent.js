import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    itemValue: {
        color: theme.color.grayishBlue2
    }
}));

function UnresolvedTicketsComponent({ containerStyles }) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    function renderStat(title, value) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{value}</span>
            </Row>
        );
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title='Status Pengiriman'
            link='View details'
            subtitle='Group:'
            subtitleTwo='Support'
            items={[
                renderStat('Menunggu Pengiriman', 4238),
                renderStat('Menunggu Packing Selesai', 1005),
                renderStat('Menunggu Konfirmasi Pembayaran', 914),
                renderStat('Pending', 281)
            ]}
        />
    );
}

export default UnresolvedTicketsComponent;
