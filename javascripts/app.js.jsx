window.App = React.createClass({
  getInitialState: function() {
    return ({ ShowAboutMe: false, ShowProjects: false, ShowEntente: false });
  },
  handleClick: function(e) {
    var showComponent = e.currentTarget.getAttribute('value');

    for (item in this.state) {
      this.state[item] = false;
    }

    if (this.state[showComponent]) {
      this.state[showComponent] = true;
    }

    this.forceUpdate();
  },
  render: function()  {

    return(
      <div className="react-wrapper">
        <Menu handleClick={this.handleClick} />
        <AboutMe show={this.state.ShowAboutMe} handleClick={this.handleClick} />
      </div>
    );

  }
});
