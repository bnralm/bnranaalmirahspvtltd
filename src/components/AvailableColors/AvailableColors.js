import React from 'react';

const availableColors = {
    colors: [
        {
            name: "Dawn Glow",
            code:"#dc3900"
        },
        {
            name: "Aluminum",
            code:"#9da6a1"
        },
        {
            name: "Super Grey",
            code:"#a19f88"
        },
        {
            name: "Light Grey",
            code:"#81937d"
        },
        {
            name: "Tata Blue",
            code:"#003e89"
        },
        {
            name: "DA Grey",
            code:"#4d5854"
        },
        {
            name: "Tata Blue Grey",
            code:"#587475"
        },
        {
            name: "Steel Grey",
            code:"#2e3722"
        },
        {
            name: "Mahindra Grey",
            code:"#aaae9d"
        },
        {
            name: "Commander Grey",
            code:"#6a6d5c"
        },
        {
            name: "Gris Elna",
            code:"#4c4f3a"
        },
        {
            name: "Blue Moon",
            code:"#4b8cac"
        },
        {
            name: "Dustera",
            code:"#9aa191"
        },
        {
            name: "Silver Grey",
            code:"#7f8a8c"
        },
        {
            name: "Warm Grey",
            code:"#7a7f69"
        },
        {
            name: "Pastel Blue",
            code:"#66989f"
        },
        {
            name: "Satelite Blue Grey",
            code:"#788782"
        },
        {
            name: "Tempo Grey",
            code:"#75846f"
        },
        {
            name: "Velvel Grey",
            code:"#2c392f"
        },
        {
            name: "Arctic White",
            code:"#cec4a9"
        },
        {
            name: "Francoise White",
            code:"#d8d8bc"
        },
        {
            name: "HM Shell White",
            code:"#dbca9e"
        },
        {
            name: "Tempo Blue",
            code:"#3c9f8a"
        },
        {
            name: "Bayer Blue",
            code:"#204357"
        },
        {
            name: "Oxford Blue",
            code:"#001648"
        },
        {
            name: "Clasic White",
            code:"#d5d4b5"
        },
        {
            name: "Racing Blue",
            code:"#015092"
        },
        {
            name: "Allantis Blue",
            code:"#001b5a"
        },
        {
            name: "Dark Nepune Blue",
            code:"#0f1f1c"
        }
    ]
};

const AvailableColors = (props) => {
    return(<section className="section blue lighten-5 js-scale-sticky">
                <div className="row container">
                <h2 className="header center">Available Colors</h2>
                <p>BN &amp; Rana Almirahs offers the customization of product color for customers. You can choose your almirah&rsquo;s color from listed below colors.</p>
                <ul className="list-unstyle color-wrap"> 
                {availableColors.colors.map((coloritem) => {
                  return  (<li className="color-box" style={ {backgroundColor: coloritem.code}}>
                        <span className="color-lable">{coloritem.name}</span>
                    </li>)
                })}
                </ul>

                <p><sup>*</sup>Note:- Choosing customize color will take maximum 4 additional days, for drying the almirah&rsquo;s colors.</p>
            </div>
        </section>
    )
}

export default AvailableColors;
