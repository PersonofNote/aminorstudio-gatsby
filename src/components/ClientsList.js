import React from "react"
import { Transition,  CSSTransition, TransitionGroup, } from 'react-transition-group';

const ClientsList =  ( props, { in: inProp } )  => {
    const Clients = props.clients.map(client=> {
        const index = props.clients.indexOf(client)
        const cliImg = client.client.image;
        console.log(cliImg);
        return(
          <CSSTransition
              key={index}
              timeout={500}
              classNames="cli-anim">
            <section key={index} className="client-section">
                <a href={client.client.link} >
                    <img src={require(`../images/${client.client.image}`)} alt={client.client.name} className="client-logo"></img>
                </a>
            </section>
            </CSSTransition>
        )
    });
    return (
        <div className="clients-container">{Clients}</div>
    )
          
};

export default ClientsList