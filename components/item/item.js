import './item.scss';
import ic_shipping from '../../assets/ic_shipping.png';

const hasfreeShipping = (free_shipping) => {
    if (!free_shipping) {
        return <React.Fragment></React.Fragment>
    }
    
    return <img className="layout-margin" src={ic_shipping} />
}

const Item = (props) => {
    return(
        <React.Fragment>
            <div className="item-container layout-row layout-align-start-center">
                <img className="item-image" src={props.item.thumbnail}></img>
                <div className="item-container layout-row layout-align-space-between-center">
                    <div>
                        <div className="layout-row layout-align-start-center">
                            <h1>{ props.item.price }</h1>
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