window.Menu = React.createClass({
  render: () => {

    return (
      <div className="menu">
        <a value="ShowAboutMe" onClick={this.props.handleClick}>About Me</a>
        <a value="ShowProjects" onClick={this.props.handleClick}>Projects</a>
        <a value="ShowEntente" onClick={this.props.handleClick}>Entente</a>
      </div>
    );
  }
  
});
