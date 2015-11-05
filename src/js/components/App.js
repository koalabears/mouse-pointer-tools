var React   = require('react');


var App = React.createClass({

  getInitialState: function() {
    return {
      x: 0,
      y: 0
    };
  },

  getDefaultProps: function() {
    return {
      width: 30,
      height: 30
    };
  },

  render: function () {
    var self = this;
    console.log(self.props);
    console.log(parseInt(self.state.x) - self.props.width/2);
    var style = {
      position: 'fixed',
      left: (parseInt(self.state.x) - self.props.width/2) +'px',
      //mouse position minus the div width/2
      top: (parseInt(self.state.y) - self.props.height/2) +'px',
      color: 'blue',
      borderRadius: '100%',
      backgroundColor: 'blue',
      width: self.props.width,
      height: self.props.height
    };
    return(
      <div style={style}>
      </div>
    );
  },

  componentDidMount: function() {
    window.onmousemove = function(event){
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }.bind(this);
  }
});

module.exports = App;
