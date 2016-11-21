var React = require('react')

var tacos = require('../data/tacos.json')

var Place = require('./Place')

var TacoList = React.createClass({
  render: function() {
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          {tacos.map(function(place) {
            return <Place key={place.id} place={place} />
          })}
        </ul>
      </div>
    )
  }
})

module.exports = TacoList