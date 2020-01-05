import React, { Component } from 'react';
import Nav from '../components/nav';
import Head from 'next/head'
import ItemsTable from '../components/items-table/items-table';
import '../styles.scss';

export class Items extends Component {
    static async getInitialProps({ query }) {
        const search = query ? query.search : navigator.search

        return { search }
    }

    constructor(props) {
        super(props);
        this.state = { 
            items: []
        }
    }
    
    async componentDidMount() {
        await this.getItems();
    }

    async getItems() {
        try {
            const url = `http://localhost:3001/api/items?search=${
                this.props.search
            }&limit=${4}`;

            const fetchItems = async () => {
                const res = await fetch(url)
                const data = await res.json();

                return data;
            }

            fetchItems().then(response => {
                if (response.results.length === 0)return;

                this.setState({
                    items: response.results
                })
            });

        } catch (error) {
            console.error(error);
        }
      }

    async componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.url.query.search) {
          await this.getItems();
        }
    }

    render() {
        return <React.Fragment>
            <Head className="example">
                <title>Resultados | Mercado Libre</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <section>
                <ItemsTable results={ this.state.items } />
            </section>
        </React.Fragment>
    }
}

export default Items;
