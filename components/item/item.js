import './item.scss';
import ic_shipping from '../../assets/ic_shipping.png';
import { Router } from '../../routes/routes-index';

const hasfreeShipping = (free_shipping) => {
    if (!free_shipping) {
        return <React.Fragment></React.Fragment>
    }
    
    return <img className="layout-margin" src={ic_shipping} />
}

const Item = (props) => {
    return(
        <React.Fragment>
                <div onClick={() => Router.pushRoute('item-detail', { id: props.item.id })}
                    className="item-container layout-row layout-align-start-center">
                    <img className="item-image" src={props.item.thumbnail}></img>
                    <div className="item-container layout-row layout-align-space-between-start">
                        <div>
                            <div className="layout-row layout-align-start-center">
                                <h1>$ { Number(props.item.price).toLocaleString('es') }</h1>
                                { hasfreeShipping(props.item.shipping.free_shipping) }
                            </div>
                            <h2>{ props.item.title }</h2>
                        </div>
                        <span>{ props.item.address.state_name }</span>
                    </div>
                </div>
            <hr className="layout-margin" />
        </React.Fragment>
    )
}

export default Item;