import { Chart } from './chart';
import { fetchData } from './data';
import { Slider } from './slider';

var Storyline = function(targetId, config) {
  //Chart
  var self = this;
  this.container = document.getElementById(targetId);
  //this should not be zero//
  this.width = this.container.clientWidth;
  this.slider = new Slider(config.slides, config.startIndex);
  var slider = this.slider;

  (fetchData(config)).then(function(dataObj) {
    var highlightedRows = slider.highlightRows(),
        chart = new Chart(dataObj, highlightedRows, storyline.width);

    self.appendChart(chart);
    self.appendSlider(slider);
    slider.attachClickHandler();
  });
}
Storyline.prototype = { 
  buildSlides: function(config, targetId) {
    config 
  },
  appendChart: function(chart) {
    this.container.appendChild(chart.elem); 
    //chart.setWidth(this.width)
  },
  appendSlider: function(slider) {
    this.container.appendChild(slider.elem);
    slider.setWidth(this.width)
    slider.elem.style.opacity = 1;
  }
}

module.exports = {
  Storyline
}
