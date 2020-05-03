import React from "react"
import { Transition, CSSTransition } from 'react-transition-group';

const TestTrans = ({ in: inProp }) => (
  <CSSTransition in={inProp} timeout={200} classNames="my-node">
  <div>
    {"I'll receive my-node-* classes"}
  </div>
  </CSSTransition>
  ); 

  export default TestTrans;