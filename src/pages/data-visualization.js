import React from "react"

import { useRef, useEffect, useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useInterval from "../components/useInterval"

import GraphHex from "../components/icon-components/graphHex"

import * as d3 from "d3";

const generateDataset = () => (
    Array(10).fill(0).map(() => ([
      Math.random() * 80 + 10,
      Math.random() * 35 + 10,
    ]))
  )


const DataVizPage = () => {
  const ref = useRef()
  useEffect(() => {
    const xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([10, 290])
    const yScale = d3.scaleLinear()
      .domain([0,100])
      .range([0,100])
    const svgElement = d3.select(ref.current)
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
    console.log(yAxis)
    svgElement.append("g")
    .call(yAxis)
    svgElement.append("g")
      .call(xAxis)
  }, [])
  return (
    <div style={{
      paddingLeft: `2rem`,
  }}>
    <svg
      ref={ref}
    />
    </div>
  )
  }

  export default DataVizPage
