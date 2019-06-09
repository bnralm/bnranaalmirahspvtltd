import React from 'react';

const PdpDescriptionComponent = (props) => {
	const {
		productAvaiblityLoation,
		numberDoor,
		prodcutMsg,
		nubmderOfShelves,
		needForThis,
		dimensions,
		numberOfSecretLocker,
		itemCondition,
		material,
		mirror,
		brand,
		productWarrrenty,
		productDelivery,
		modeofPayment
	} = props.props;
 return (
 <div className="col s12 m12 pdp-description">
 		<h4 className="indigo-text darken-4">Product Descriptions</h4>
		 <table className="pdp-desc-table">
			<thead>
				<tr><th>Key</th><th>Description</th></tr>
			</thead>
			<tbody>
				{numberDoor ? (<tr><td>Number of Door Cabinets</td><td>{numberDoor }</td></tr>) : null }
				{nubmderOfShelves ? (<tr><td>Number of Shelves</td><td>{nubmderOfShelves}</td></tr>) : null } 
				{needForThis ? (<tr><td>Usage/Application</td><td>{needForThis}</td></tr>) : null} 
				{dimensions ? (<tr><td title="(Height x Width x Depth) in inch">Product Dimensions <span >H x W x D</span></td><td>{dimensions}</td></tr>) : null} 
				{numberOfSecretLocker ? (<tr><td>Number of Locker</td><td>{numberOfSecretLocker}</td></tr>) : null} 
				{itemCondition ? (<tr><td>Condition</td><td>{itemCondition}</td></tr>) : null } 
				{productAvaiblityLoation ? (<tr><td>Product Avaiblity Location</td><td> {productAvaiblityLoation.map( (location, ind) => (<span key={'ind'+ind} className="pdp-location">{location}</span>) )}</td></tr>) : null } 
				{material ? (<tr><td>Material</td><td> {material}</td></tr>) : null } 
				{mirror ? (<tr><td>Mirror</td><td>{mirror}</td></tr>) : null } 
				{brand ? (<tr><td>Brand</td><td>{brand} </td></tr>) : null } 
				{productWarrrenty ? (<tr><td>Product Warrenty</td><td>{productWarrrenty}</td></tr>) : null} 
				{productDelivery ? (<tr><td>Product Delivery</td><td>{productDelivery}</td></tr>) : null } 
				{modeofPayment ? (<tr><td>Payment option</td><td>{modeofPayment} </td></tr>) : null} 
			</tbody>
		</table>
  		<p>{prodcutMsg}</p>
 	</div>
 )
}

export default PdpDescriptionComponent;