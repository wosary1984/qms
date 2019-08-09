import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Random from 'd3-random';

declare var $: any;
@Component({
  selector: 'app-wafer',
  templateUrl: './wafer.component.html',
  styleUrls: ['./wafer.component.scss']
})
export class WaferComponent implements OnInit, AfterViewInit {

  private title: string = 'Wafer Map';

  ngAfterViewInit(): void {
    //throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    this._init();
  }

  _init() {
    let div = $('.wafer-svg')[0];
    let width = 500, height = 500;
    if (div) {
      width = div.offsetWidth;
      height = div.offsetHeight;
      var svg = d3.select(".wafer-svg")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "background:rgb(255, 255, 255)")
        .call(d3.zoom().on("zoom", function () {
          svg.attr("transform", d3.event.transform)
        }))
        .append("g")

      let cx = width / 2;
      let cy = height / 2;
      let r = height / 2;


      svg.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", r)
        .style("fill", "#B8DEE6")

      /* var randomX = d3.random.normal(width / 2, 80),
        randomY = d3.random.normal(height / 2, 80);

      var data = d3.range(2000).map(function () {
        return [randomX(), randomY()];
      }); */

      var data1 = d3.range(Math.round(2*r/5)).map(function (i) {
        console.log( [cx-r+i*5, cy])
        return [cx-r+i*5, cy];
      })

      var data2 = d3.range(Math.round(2*r/5)).map(function (i) {
        console.log( [cx-r+i*5, cy-5])
        return [cx-r+i*5, cy-5];
      })

      var data3 = d3.range(Math.round(2*r/5)).map(function (i) {
        console.log( [cx-r+i*5, cy-i*5])
        return [cx-r+i*5, cy-i*5];
      })

      var data = data3;

      svg.selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr("x", function(d){return d[0]})
      .attr("y", function(d){return d[1]})
      .attr("width", 5)
      .attr("height", 5)
      .attr("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)");

      /* svg.append("rect")
        .attr("x", cx-r)
        .attr("y", cy)
        .attr("width", 10)
        .attr("height", 10)
        .attr("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)")

        svg.append("rect")
        .attr("x", cx-r)
        .attr("y", cy-50)
        .attr("width", 10)
        .attr("height", 10)
        .attr("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)")

      svg.append("rect")
        .attr("x", cx - 10)
        .attr("y", cy)
        .attr("width", 10)
        .attr("height", 10)
        .attr("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)")

      svg.append("rect")
        .attr("x", cx - 10)
        .attr("y", cy - 10)
        .attr("width", 10)
        .attr("height", 10)
        .attr("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)") */
    }
  }
}

