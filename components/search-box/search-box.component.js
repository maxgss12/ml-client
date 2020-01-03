import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import './search-box.scss';
import logo from '../../assets/Logo_ML.png';
import ic_Search from '../../assets/ic_Search.png';

export default class SearchBox extends Component {
    state = {
        search: ''
    };

    searchRef = React.createRef();

    goToSearchResults = () => {
        Router.push('/items?search=' + this.state.search);
    }

    updateSearchText = (event) => {
        event.preventDefault();

        this.setState({
            search: this.searchRef.current.value
        }, () => {
            this.goToSearchResults()
        })
    }

    render() {
        return <form onSubmit={ this.updateSearchText } className="layout-row layout-align-center-center">
            <Link href="/">
                <a className="logo layout-row layout-align-center-center">
                    <img src={logo} alt="MercadoLibre" />
                </a>
            </Link>   
            <input type="text" placeholder="Nunca dejes de buscar"
                ref={ this.searchRef }
            />
            <button className="layout-row layout-align-center-center" type="submit"><img src={ic_Search} alt="Buscar" /></button>
        </form>
    }
}
