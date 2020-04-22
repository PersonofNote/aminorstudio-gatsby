//Uncertain if I should keep this
import React from "react"

const Icon = (props) => (
  <svg className="svg-icon">
    <use xlinkHref={`#${props.id}`} />
  </svg>
);

export default Icon