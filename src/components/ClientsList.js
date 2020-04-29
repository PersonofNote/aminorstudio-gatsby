import React from "react"

const ClientsList = ( props ) => {
    console.log(props);
    const Clients = props.clients.map(client=> {
        return(
            <section key={client.name} className="client-section">
                <a href={client.link}>
                    <img src={require("../images/meals-on-wheels-logo.png")} alt={client.name}></img>
                </a>
            </section>
        )
    });
    return (
        <div className="clients-container">{Clients}</div>
    )
          
};

export default ClientsList