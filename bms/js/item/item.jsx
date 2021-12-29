import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import TopAppBar from '../nav/top_app_bar';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                item_id: 0,
                name: '',
                category: '',
                subcategory: '',
                pretax_price: 0,
                tax: 0,
                price: 0,
                date: '',
            }
        };
    }

    componentDidMount() {
        const { url } = this.props;

        fetch(url, { credentials: 'same-origin' })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                this.setState({
                    item: data.item,
                });
            })
            .catch((error) => console.log(error));
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            item: {
                ...this.state.item,
                [name]: value,
            }
        })
    }

    render() {
        const { item } = this.state;
        return (
            <React.Fragment>
                <CssBaseline />
                <TopAppBar title='Item' />
                <div className='item'>
                    <p> Item {item.item_id} </p>
                    <TextField
                        required
                        id='outlined-name'
                        label='Name'
                        name='name'
                        value={item.name}
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        id='outlined-pretax-price'
                        type='number'
                        label='Pretax Price'
                        name='pretax_price'
                        value={item.pretax_price}
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        id='outlined-tax'
                        type='number'
                        label='Tax'
                        name='tax'
                        value={item.tax}
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        id='outlined-price'
                        type='number'
                        label='Price'
                        name='price'
                        value={item.price}
                        onChange={this.handleChange}
                    />

                    <p> {item.name} </p>
                    <p> {item.category} </p>
                    <p> {item.subcategory} </p>
                    <p> {item.pretax_price} </p>
                    <p> {item.tax} </p>
                    <p> {item.price} </p>
                    <p> {item.date} </p>
                </div>
            </React.Fragment>
        );
    }
}

Item.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Item;