var React = require('react')

var ReactChartJS = require('react-chartjs-2')
var {Bar} = ReactChartJS

var movies = require('../data/movies.json')

var MovieChart = React.createClass({
  render: function() {
    var movieTitles = []
    var runtimes = []
    movies.forEach(function(movie) {
      movieTitles.push(movie.title)
      runtimes.push(parseInt(movie.runtime, 10))
    })
    var data = {
      labels: movieTitles,
      datasets: [
        {
          label: 'Runtime',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          fontSize: 8,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: runtimes
        }
      ]
    }
    var options = {
      maintainAspectRatio: false,
      scales: { 
        xAxes: [{
          display: false
        }]
      }
    }
    return (
      <Bar data={data} height={480} options={options} />
    )
  }
})

module.exports = MovieChart