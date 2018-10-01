import React from 'react';

const BreadcumComponent = (props) => {
	const {productCode, productDiscriptionMsg, productDiscription} = props.pdpBio;
    return (
        <div className="col m6 s12 pdp-bio">
            <h4 class="header indigo-text text-lighter-1">{productCode}</h4>
            <h5 class="header indigo-text text-lighter-1">*Price: {'INR '+props.productPrice + '/-'}</h5>
			<p>*Adding mirror will be chargable @ INR 900.00 /- </p>
			{ productDiscriptionMsg.map( para => (<p>{para}</p>) ) }

			<div className="pdp-avail-location collection">
				<div class="collection-item">
					<span className="header indigo-text text-lighter-1">Product Avaiblity Location</span>
					{ productDiscription.productAvaiblityLoation.map( loc => (<span className='badge'>{loc}</span>) ) } 
				</div>
			</div>
			<div class="user-action-pdp">
				<div className="right">
					<a href="#" class="icon-share"><i class="material-icons">share</i></a> <a href="javascript:window.print();" className="icon-print"><i class="material-icons">local_printshop</i></a>
				</div>
			</div>	
        </div>	
    )
}

export default BreadcumComponent;
