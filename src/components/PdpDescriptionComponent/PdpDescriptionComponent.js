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
        <div class="col s12 m12 pdp-description">
    		<h4 class="indigo-text darken-4">Product Descriptions</h4>
		      <table class="pdp-desc-table">
		      	<tr><th>Key</th><th>Description</th></tr>
		      	{
					numberDoor ? (<tr><td>Number of Door Cabinets</td><td>{numberDoor }</td></tr>) : ''
				}
				{
					nubmderOfShelves ? (<tr><td>Number of Shelves</td><td>{nubmderOfShelves}</td></tr>) : ''
				}  
		      	{
					needForThis ?  (<tr><td>Usage/Application</td><td>{needForThis}</td></tr>) : ''
				}  
		      	{
					 dimensions ? (<tr><td title="(Height x Width x Depth) in inch">Product Dimensions <span >H x W x D</span></td><td>{dimensions}</td></tr>) : ''
				}  
		      	{
					numberOfSecretLocker ?  (<tr><td>Number of Locker</td><td>{numberOfSecretLocker}</td></tr>) : ''
				}  
		      	{
					itemCondition ?  (<tr><td>Condition</td><td>{itemCondition}</td></tr>) : ''
				}  
		      	{
					 productAvaiblityLoation ? (<tr><td>Product Avaiblity Location</td><td> {productAvaiblityLoation.map( location => (<span className="pdp-location">{location}</span>) )}</td></tr>) : ''
				}  
		      	{
					 material ? (<tr><td>Material</td><td> {material}</td></tr>) : ''
				}  
		      	{
					mirror ?  (<tr><td>Mirror</td><td>{mirror}</td></tr>) : ''
				}  
		      	{
					 brand ? (<tr><td>Brand</td><td>{brand} </td></tr>) : ''
				}  
		      	{ 
					productWarrrenty ?  (<tr><td>Product Warrenty</td><td>{productWarrrenty}</td></tr>) : ''
				}  
		      	{
					productDelivery ? (<tr><td>Product Delivery</td><td>{productDelivery}</td></tr>) : ''
				}  
		      	{
					modeofPayment ?  (<tr><td>Payment option</td><td>{modeofPayment} </td></tr>) : ''
				}  
			  </table>
              <p>{prodcutMsg}</p>
    	</div>
    )
}

export default PdpDescriptionComponent;