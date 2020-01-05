import React, { Component } from 'react';
import Item from '../item/item';
import '../item/item.scss';
import '../../assets/flex-layout/flex-layout.scss';

export default class ItemsTable extends Component {  
    showItems = () => {
        const items = this.props.results;

        if(items.length === 0) return;

        return (
            <div className="card">
                { items.map((item, i) => {
                    return (
                        <Item key={item.id} item={item} />)
                }) }
            </div>
        )
    }

    render() {
        return (<div className="layout-margin">
            { this.showItems() }
        </div>)
    }
}
