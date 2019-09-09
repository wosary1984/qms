import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Random from 'd3-random';
import { WaferdataService } from 'src/app/service/wafer/waferdata.service';

declare var $: any;
@Component({
  selector: 'app-wafer',
  templateUrl: './wafer.component.html',
  styleUrls: ['./wafer.component.scss'],
  providers: [WaferdataService]
})
export class WaferComponent implements OnInit, AfterViewInit {

  @Input() title: string = 'Wafer Map';

  @Input() waferid: string;

  constructor(private waferdataService: WaferdataService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.drawWafer(this.waferid);
    //console.log(this.waferid);
    //this._init();
  }

  drawWafer(waferid: string) {
    let that = this;
    that.waferdataService.getWaferData(waferid).then(data => {
      if (data.code === 200 && data.data != null) {
        console.log(data.data[0]);
        that.draw(data.data[0]);
      }
    })
  }

  draw(data: any) {
    let raw = data.data;
    let radius = data.radius;
    let scale = 5;
    let winonwRadius = radius * 5;
    let div = $('.wafer-svg')[0];
    if (div) {

      let width = div.offsetWidth;
      let height = div.offsetHeight;
      let svg = d3.select(".wafer-svg")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style", "background:rgb(255, 255, 255)")
        .call(d3.zoom().on("zoom", function () {
          svg.attr("transform", d3.event.transform)
        }))
        .append("g");

      let centerx = width / 2;
      let centery = height / 2;

      svg.append("circle")
        .attr("cx", centerx)
        .attr("cy", centery)
        .attr("r", winonwRadius)
        .style("fill", "grey");

      svg.selectAll('rect')
        .data(raw)
        .enter().append('rect')
        .attr("x", function (d) { return centerx + d.cx * scale + d.delta * scale; })
        .attr("y", function (d) { return centery - d.cy * scale - scale / 2; })
        .attr("width", scale)
        .attr("height", scale)
        .style("fill", function (d) { return d.defect === true ? 'red' : 'green'; })
        .style("stroke-width", "1")
        .style("stroke", "rgb(0,0,0)");
    }

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
      let scale = 5;
      let rs = Math.round(r / scale);

      function le(r, h) {
        return Math.sqrt(Math.pow(r, 2) - Math.pow(h, 2));
      }
      svg.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", r)
        .style("fill", "grey");

      var data = [];
      for (let y = 0; y < rs; y++) {
        let yy = rs - Math.round(le(r, y * scale) / 5);
        let dataU = d3.range(rs * 2 - yy * 2).map(function (i) {

          let value = {
            px: cx - r + i * scale + Math.round(yy) * scale,
            py: cy - y * scale,
            color: Math.random() > 0.9 ? 'red' : 'green',
            sx: i - rs,
            sy: yy
          }
          return value;
          //return [cx-r+i*scale + Math.round(yy)*scale, cy-y*scale];
        })
        data = data.concat(dataU);
        var dataD = d3.range(rs * 2 - yy * 2).map(function (i) {
          let value = {
            px: cx - r + i * scale + yy * scale,
            py: cy + y * scale,
            color: Math.random() > 0.9 ? 'red' : 'green',
            sx: i - rs,
            sy: -yy
          }
          return value;
          //return [cx-r+i*scale + yy*scale, cy+y*scale];
        })
        data = data.concat(dataD);
      }

      svg.selectAll('rect')
        .data(data)
        .enter().append('rect')
        .attr("x", function (d) { return d.px })
        .attr("y", function (d) { return d.py })
        .attr("width", scale)
        .attr("height", scale)
        .style("fill", function (d) { return d.color })
        .style("stroke-width", "1")
        .style("stroke", "rgb(0,0,0)");
      //.attr("style", "fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)");
    }
  }
}

