var React   = require('react');

var Rulers = React.createClass({
    render: function () {
      var self = this;
      var verticalStyle = {
        backgroundColor: self.props.color,
        height: '100%',
        width: '2px',
        position: 'fixed',
        left: self.props.x + 'px',
        top: '0',
        bottom: '0'
      };
      var horizontalStyle = {
        backgroundColor: self.props.color,
        height: '2px',
        width: '100%',
        position: 'fixed',
        top: self.props.y + 'px',
        left: '0',
        right:'0'
      };

      return (
        <div>
          <svg style={verticalStyle}>
          </svg>
          <svg style={horizontalStyle}>
          </svg>
        </div>
      )
    }
});


var App = React.createClass({

  getInitialState: function() {
    return {
      x: 0,
      y: 0
    };
  },

  getDefaultProps: function() {
    return {
      showRulers: true,
      showCoords: true,
      color: 'black'
    };
  },

  render: function () {
    var self = this;
    var style = {
      position: 'fixed',
      left: parseInt(self.state.x, 10)+7 +'px',
      top: parseInt(self.state.y, 10)-20 +'px',
      color: self.props.color,
      fontFamily: 'Courier New'
    };
    var rulerProps = {
      x: self.state.x,
      y: self.state.y,
      color: self.props.color
    };
    return(
      <div style={style}>
        {self.state.x + ", " + self.state.y}
        {self.props.showRulers?<Rulers {...rulerProps}/> : ""}
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
