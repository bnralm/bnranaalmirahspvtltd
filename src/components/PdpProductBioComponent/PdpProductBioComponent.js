import React from 'react';

const BreadcumComponent = (props) => {
	const { productCode, productDtlDiscriptionMsg, productAvaiblityLoation } = props.props;
	return (
        <div className="col m6 s12 pdp-bio">
            <h4 className="header indigo-text text-lighter-1">{productCode}</h4>
			{
				productDtlDiscriptionMsg.map( para => (<p>{para}</p>))
			}

			<div className="pdp-avail-location collection">
				<div className="collection-item">
					<span className="header indigo-text text-lighter-1">Product Avaiblity Location</span>
					{
						productAvaiblityLoation.map( loc => (<span className='badge'>{loc}</span>) )
					} 
				</div>
			</div>
			<div className="user-action-pdp">
				<div className="right">
					<a href="#" className="icon-share"><i className="material-icons">share</i></a> <a href="javascript:window.print();" className="icon-print"><i className="material-icons">local_printshop</i></a>
				</div>
			</div>	
        </div>	
    )
}

export default BreadcumComponent;
