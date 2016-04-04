window.App = React.createClass({
  getInitialState: () => {
    return ({ ShowAboutMe: false, ShowProjects: false, ShowEntente: false });
  },
  handleClick: () => {
    var showComponent = e.currentTarget.getAttribute('value');

    if (this.state[showComponent]) {
      this.state[showComponent] = false;
    } else {
      this.state[showComponent] = true;
    }

    this.forceUpdate();
  },
  render: () => {

    return(
      <Menu onClick={this.handleClick} />
      <AboutMe show={this.state.ShowAboutMe} />
    );

  }
});
