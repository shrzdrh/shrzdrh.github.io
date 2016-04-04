window.AboutMe = React.createClass({
  render: () => {
    var componentStyles = "about-me";
    componentStyles += this.props.show ? " show-about" : " hide-about";

    return (
      <div className={componentStyles}>

      </div>
    );
  }
});
