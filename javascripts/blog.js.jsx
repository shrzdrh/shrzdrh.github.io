window.Blog = React.createClass({
  render: function()  {
    var componentStyles = "blog";
    componentStyles += this.props.show ? " show-blog" : " hide-blog";

    return (
      <div className={componentStyles}>
        How did I make these transitions?
      </div>
    );
  }
});
