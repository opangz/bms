import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import ItemList from './item_list';
import TopAppBar from './top_app_bar';

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <TopAppBar />
                <ItemList url='/api/v1/items/' />
            </React.Fragment>
        );
    }
};

export default Dashboard;