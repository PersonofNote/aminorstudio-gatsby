import React from "react"

const ClientsList =  props  => {
    const Clients = props.clients.map(client=> {
        const index = props.clients.indexOf(client)
        const cliImg = client.client.image;
        console.log(cliImg);
        return(
            <section key={index} className="client-section">
                <a href={client.client.link}>
                    <img src={require(`../images/${client.client.image}`)} alt={client.client.name}></img>
                </a>
            </section>
        )
    });
    return (
        <div className="clients-container">{Clients}</div>
    )
          
};

export default ClientsList