window.Menu = React.createClass({
  render: function() {
    return (
      <div className="nav-bar" onClick={this.props.handleClick}>
        <a href="#" value="ShowAboutMe">About Me</a>
        <a href="#" value="ShowProjects">Projects</a>
        <a href="#" value="ShowEntente">Entente</a>
        <a href="#" value="ShowBlog">Blog-ish</a>
      </div>
    );
  }

});
