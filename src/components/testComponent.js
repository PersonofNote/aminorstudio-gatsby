import React from "react"

function ReptileList() {
    return (
        this.props.map(prop => (<li key={prop}>{prop}</li>)
    ));
  }

export default ReptileList