window.Menu = React.createClass({
  render: function() {
    return (
      <div className="nav-bar">
        <a href="#" value="ShowAboutMe" onClick={this.props.handleClick}>About Me</a>
        <a href="#" value="ShowProjects" onClick={this.props.handleClick}>Projects</a>
        <a href="#" value="ShowEntente" onClick={this.props.handleClick}>Entente</a>
        <a href="#" value="ShowBlog" onClick={this.props.handleClick}>Blog-ish</a>
      </div>
    );
  }

});
