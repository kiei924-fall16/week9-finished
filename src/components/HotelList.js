var React = require('react')

var hotels = require('../data/hotels.json')

var Place = require('./Place')

var HotelList = React.createClass({
  render: function() {
    return (
      <div className="col-sm-12">
        <ul className="list-group">
          {hotels.map(function(place) {
            return <Place key={place.id} place={place} />
          })}
        </ul>
      </div>
    )
  }
})

module.exports = HotelList