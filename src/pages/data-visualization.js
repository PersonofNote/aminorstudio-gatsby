import React from "react"

import { useRef, useEffect, useState, setInterval} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GraphHex from "../components/icon-components/graphHex"

import rd3 from 'react-d3-library'

const RD3Component = rd3.Component;

const generateDataset = () => (
    Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
  )


const DataVizPage = () => {
    
    const [dataset, setDataset] = useState(
      generateDataset()
    )


    return (
        <Layout>
        <div>
          <GraphHex />
            <svg viewBox="0 0 100 50">
                {dataset.map(([x, y], i) => (
                <circle
                    cx={x}
                    cy={y}
                    r="3"
                />
                ))}
            </svg>
        </div>
        </Layout>
    )
  }

  export default DataVizPage
