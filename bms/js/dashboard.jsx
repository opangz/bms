import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LeftDrawer from './left_drawer';
import ItemList from './item_list';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <LeftDrawer />
                <ItemList url='/api/v1/items/'/>
            </React.Fragment>
        );
    }
};

export default Dashboard;