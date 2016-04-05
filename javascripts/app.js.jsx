window.App = React.createClass({
  getInitialState: function() {
    return ({ init: false, ShowAboutMe: true, ShowProjects: false, ShowBlog: false });
  },
  componentDidMount: function() {
    var emptydiv = ReactDOM.findDOMNode(this.refs.empty);
  },
  handleClick: function(e) {
    var showComponent = e.target.getAttribute("value");

    for (var state in this.state) {
      this.state[state] = false;
    }

    this.state[showComponent] = true;

    if (this.state.init) {
      this.forceUpdate();
    } else {
      this.setState({init: true});
    }
  },
  render: function()  {
    return(
      <div className="react-wrapper">
        <Navbar handleClick={this.handleClick} />
        <AboutMe show={this.state.ShowAboutMe} init={this.state.init} handleClick={this.handleClick} />
        <Blog show={this.state.ShowBlog} init={this.state.init} handleClick={this.handleClick} />
        <Projects show={this.state.ShowProjects} init={this.state.init} handleClick={this.handleClick} />
      </div>
    );

  }
});
