import React, { Component } from 'react';
import Nav from '../components/nav';
import Head from 'next/head'
import '../styles.scss';
import '../assets/flex-layout/flex-layout.scss';
import '../components/item/item.scss';

export default class ItemDetail extends Component {
    static async getInitialProps({ query }) {
        const id = query ? query.id : navigator.id

        return { id }
    }

    constructor(props) {
        super(props);
        this.state = { 
            item: {}
        }
    }
    
    async componentDidMount() {
        await this.getItem();
    }

    async getItem() {
        try {
            const url = `http://localhost:3001/api/items/${ this.props.id }`;

            const fetchItems = async () => {
                const res = await fetch(url)
                const data = await res.json();

                return data;
            }

            fetchItems().then(response => {
                if (response && !response.id) return;

                this.setState({
                    item: response
                })
            });

        } catch (error) {
            console.error(error);
        }
      }

    async componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.url.query.id) {
          await this.getItem();
        }
    }

    getFirstImage() {
        if (!this.state.item.pictures) return;

        return this.state.item.pictures[0].url;
    }

    showItems = () => {
        const item = this.state.item;

        if(item && !item.id) return;

        const translate_detail_item = {
            new: 'Nuevo'
        }

        return (
            <div className="card">
                <div className="layout-margin">
                    <div className="layout-row layout-align-start-start layout-column--xs layout-wrap">
                        <div className="image-container-large layout-row layout-align-center-center">
                            <img className="item-image-large" src={this.getFirstImage()} alt="preview"></img>
                        </div>
                        <div className="flex-30 flex-100--xs layout-padding">
                            <span className="caption">{ translate_detail_item[this.state.item.condition] + ' - ' + this.state.item.sold_quantity + ' vendidos' }</span>
                            <h2 className="subtitle">{ this.state.item.title }</h2>
                            <h1 className="title">$ { Number(this.state.item.price).toLocaleString('es') }</h1>
                            <button className="button-raised" type="button">Comprar</button>
                        </div>
                    </div>
                    <div className="layout-padding">
                        <h2 className="title-description">Descripción del producto</h2>
                        <p>{ this.state.item.description }</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return <React.Fragment>
            <Head className="example">
                <title>{ this.state.item.title } | Mercado Libre</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <section>
                { this.showItems() }
            </section>
        </React.Fragment>
    }
}
