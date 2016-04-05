window.Projects = React.createClass({
  render: function() {
    var componentStyles = "projects";
    componentStyles += this.props.show ? " show-projects" : " hide-projects";

    return (
      <div className={componentStyles}>
        <span className="question">What have I pushed out into the ether?</span>
        <div className="thumbnails">
          <a href=""><img src="./images/ski-free.png">Ski Free</img></a>
          <a href=""><img src="./images/entente.png">Entente</img></a>
          <a href=""><img src="./images/orm.png">AnORM</img></a>
          <a href=""><img src="./images/instapixies.png">Instapixies</img></a>
        </div>
        <span className="question">What am I currently working on?</span>
          <a href=""><img src="./images/android.png">Hello app World!</img></a>
          I am using my old Java skills to build an Android app. I want
          to use a remote API like I did with Instapixies to display user
          requested data.
      </div>
    );
  }
});
