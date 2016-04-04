window.App = React.createClass({
  getInitialState: function() {
    return ({ ShowAboutMe: false, ShowProjects: false, ShowEntente: false, ShowBlog: false });
  },
  handleClick: function(e) {
    var showComponent = e.currentTarget.getAttribute("value");

    for (var state in this.state) {
      this.state[state] = false;
    }

    this.state[showComponent] = true;

    this.forceUpdate();
  },
  render: function()  {

    return(
      <div className="react-wrapper">
        <Menu handleClick={this.handleClick} />
        <AboutMe show={this.state.ShowAboutMe} handleClick={this.handleClick} />
        <Blog show={this.state.ShowBlog} handleClick={this.handleClick} />
      </div>
    );

  }
});
