window.Menu = React.createClass({
  render: function() {
    return (
      <div className="nav-bar">
        <a href="#" value="ShowAboutMe" onClick={this.props.handleClick}>About Me</a>
        <a href="#" value="ShowAboutMe" onClick={this.props.handleClick}>Projects</a>
        <a href="#" value="ShowAboutMe" onClick={this.props.handleClick}>Entente</a>
      </div>
    );
  }

});
