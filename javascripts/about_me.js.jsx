window.AboutMe = React.createClass({
  render: function()  {
    var componentStyles = "about-me";
    componentStyles += this.props.show ? " show-about" : " hide-about";

    return (
      <div className={componentStyles}>
        Dating back to when I was a kid,
        I remember my fascination with computers and human behavior.  I began
        studying Neuroscience in college, and picked up Computer Science classes
        after observing the problems bioinformatists got to think about.  While
        writing my first programs, I realized I wanted to make a life out of
        architecting solutions and optimizations for society through software.<br/>
        Here's what I've done professionally >> [resume].
      </div>
    );
  }
});
