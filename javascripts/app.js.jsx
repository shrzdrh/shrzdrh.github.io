window.App = React.createClass({
  getInitialState: function() {
    return ({ init: false, ShowAboutMe: true, ShowProjects: false, ShowBlog: false });
  },
  componentDidMount: function() {
    const emptydiv = ReactDOM.findDOMNode(this.refs.empty);
  },
  handleClick: function(e) {
    const showComponent = e.target.getAttribute("value");

    for (const state in this.state) {
      this.state[state] = false;
    }

    this.state[showComponent] = true;

    if (this.state.init) {
      this.forceUpdate();
    } else {
      this.setState({init: true});
    }
  },
  getTabSelected: function() {
    if (this.state.ShowProjects) {
      return "Projects";
    } else if (this.state.ShowBlog) {
      return "Blog";
    } else {
      return "AboutMe";
    }
  },
  render: function()  {
    const tabSelected = this.getTabSelected();
    const tabs = ['About Me', 'Projects', 'Blog'];
    return(
      <div className="react-wrapper">
        <Navbar handleClick={this.handleClick} tabSelected={tabSelected} tabs={tabs}/>
        <AboutMe show={this.state.ShowAboutMe} init={this.state.init} handleClick={this.handleClick} />
        <Blog show={this.state.ShowBlog} init={this.state.init} handleClick={this.handleClick} />
        <Projects show={this.state.ShowProjects} init={this.state.init} handleClick={this.handleClick} />
      </div>
    );

  }
});
