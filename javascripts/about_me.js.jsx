window.AboutMe = React.createClass({
  render: function()  {
    var componentStyles = "about-me";
    componentStyles += this.props.show ? " show-about" : " hide-about";

    return (
      <div className={componentStyles}>
        I grew up in Northern California and dating back to my earliest memories,
        I remember my fascination with computers.
      </div>
    );
  }
});
