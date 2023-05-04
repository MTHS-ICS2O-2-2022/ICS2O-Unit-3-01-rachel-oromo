// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html


"use strict"
/**
 * This function calculates the area of a trapezoid
 */
function enterClicked() {
  //input
  const ABase = parseInt(document.getElementById("base-a-of-trapezoid").value)
  const BBase = parseInt(document.getElementById("base-b-of-trapezoid").value)
  const height = parseInt(document.getElementById("height-of-trapezoid").value
  )


  //process
  const area = ABase + BBase
  const barea = area / 2
  const fullarea = barea * height


  //output
  document.getElementById("area").innerHTML =
    "The area of the trapezoid is " + fullarea + " cm²."
}
