import React from 'react';

const BranchOfficeComponent = () => {
    document.title = `BN Rana Almirahs: Branch Office`;
    const address = [
        {
            street: 'Argaghat Road',
            locality: 'Makatpur Chowk',
            city:'Giridih',
            state: 'Jharkhand',
            pinCode: '815301',
            mobile: '9939615958',
            coveredArea: 'We are covering the delivery in Girdih Deoghar Hazaaribaag and Koderma only.'
        },
        {
            street: 'Haris Chand Ka Baag',
            locality: 'Near Lal Kuan',
            city:'Giziabaad',
            state: 'UP',
            pinCode: '201009',
            mobile: '9304002551',
            coveredArea: 'We are covering the delivery in Delhi NCR.'

        }
    ] 

    return (
        <div className="container" style={ {minHeight: '100vh'} }>
            <h2 className="text-center"> Branch Offices </h2> 
            <div className="row">
            {
            address.map( ({street, locality, city, state, pinCode, mobile, coveredArea}) => <div className="col s6 m6">
                <div class="card">
                    <div class="card-content">
                        <table className="address">
                            <tbody>
                                <tr><td>Street:</td><td>{street}</td></tr>
                                <tr><td>Locality</td><td>{locality}</td></tr>
                                <tr><td>City</td><td>{city + ' ' + state }</td></tr>
                                <tr><td>Pin Code</td><td>{pinCode}</td></tr>
                                <tr><td>Mobile</td><td>{mobile}</td></tr>
                                <tr><td colSpan="2">{coveredArea}</td></tr>
                            </tbody>  
                        </table>
                    </div>
                </div>
            </div> )
            }
            </div>
        </div>
        
    )

}

export default BranchOfficeComponent;