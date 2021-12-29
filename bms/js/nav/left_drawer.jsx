import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleDrawer = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ isOpen: toggle });
    };

    drawerComponent = () => {
        const drawerList = [
            ['Dashboard', '/'],
            ['Item', '/items/1/'],
        ];
        return <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
        >
            <List>
                {drawerList.map((el) => (
                    <ListItem key={el[0]} button>
                        <ListItemText primary={el[0]} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['About'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    };

    render() {
        return <div>
            <React.Fragment>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={this.toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor='left'
                    open={this.state.isOpen}
                    onClose={this.toggleDrawer(false)}
                >
                    {this.drawerComponent()}
                </Drawer>
            </React.Fragment>
        </div >
    };
};

export default LeftDrawer;
