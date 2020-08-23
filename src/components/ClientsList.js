import React from "react"
import { Transition,  CSSTransition, TransitionGroup, } from 'react-transition-group';

const ClientsList =  ( props )  => {
    const Clients = props.clients.map(client=> {
        const index = props.clients.indexOf(client)
        return(
            <CSSTransition
            in={true}
            appear={true}
            key={index}
            timeout={2000}
            classNames="cli-anim">
            <section 
                className="client-section"
                style={{
                    transitionDelay: `${index * 75}ms`,
                    paddingBottom: `2rem`,
            }}>
           
                <a href={client.client.link} target="_blank" >
                    <img src={require(`../images/${client.client.image}`)} title={client.client.name} alt={client.client.name} className="client-logo"></img>
                </a>
            </section>
            </CSSTransition>
        )
    });
    return (
        <TransitionGroup className="clients-container">{Clients}</TransitionGroup>
    )
          
};

export default ClientsList