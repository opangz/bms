import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    formatAsCurrency = (params) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(params.value);
    }

    componentDidMount() {
        const { url } = this.props;

        // Call REST API
        fetch(url, { credentials: 'same-origin' })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                this.setState({
                    items: data.items,
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        // GridRowsProp type
        const rows = this.state.items;

        // GridColDef[] type
        const columns = [
            { field: 'item', headerName: 'Name', width: 150 },
            { field: 'category', headerName: 'Category', width: 100 },
            { field: 'subcategory', headerName: 'Subcategory', width: 120 },
            {
                field: 'pretax_price', headerName: 'Pretax Price', width: 120,
                valueFormatter: this.formatAsCurrency
            },
            {
                field: 'tax', headerName: 'Tax', width: 80,
                valueFormatter: this.formatAsCurrency
            },
            {
                field: 'price', headerName: 'Price', width: 80,
                valueFormatter: this.formatAsCurrency
            },
            { field: 'date', headerName: 'Date', width: 100 },
        ];

        return (
            <div className="itemsList">
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
                </div>
            </div>
        );
    }
}

ItemList.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ItemList;