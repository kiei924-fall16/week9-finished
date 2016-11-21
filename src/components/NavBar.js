var React = require('react')

var NavBarItem = require('./NavBarItem')

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <NavBarItem view="movies" title="Buyflix" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="jobs" title="USAJobs" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="ufo" title="UFOs" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="taco-list" title="Taco List" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="taco-map" title="Taco Map" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="hotel-list" title="Hotel List" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="hotel-map" title="Hotel Map" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="baseball" title="World Series" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="movie-chart" title="Movie Runtime" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="tweets" title="Tweets - Platform" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="sentiment" title="Tweets - Sentiment" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = NavBar