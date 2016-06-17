window.Projects = React.createClass({
  render: function() {
    var componentStyles = "projects";

    if (this.props.init) {
      componentStyles += this.props.show ? " show-projects" : " hide-projects";
    }

    return (
      <div className={componentStyles}>
        <div className="thumbnails">
          <span className="question">A selection of work I have pushed into the Github ether:</span><br />
          <img src="./images/entente-logo.png" />
          <img src="./images/ski-free-grab.png" />
          <img src="./images/instapixies-grab.png" />
          <br />
          <div className="anchorList">
            <a href="http://entente.io/">Live</a><a href="https://github.com/sherzader/entente/">Code</a>
            <a href="/ski-free">Live</a><a href="https://github.com/sherzader/ski-free/">Code</a>
            <a href="http://instapixies.herokuapp.com/">Live</a><a href="https://github.com/sherzader/instapixies/">Code</a>
          </div>
          <br />
          <img src="./images/chitchat.png" />
          <img src="./images/secretsnowman-grab.png" />
          <img src="./images/gameoflife-grab.png" />
          <br />
          <div className="anchorList">
            <a href="http://chitchat.mod.bz/">Live</a>
            <a href="https://github.com/sherzader/chitchat/">Code</a>
            <a href="http://secretsnowman.herokuapp.com/">Live</a><a href="https://github.com/sherzader/secretsnowman/">Code</a>
            <a href="https://github.com/sherzader/GameOfLife/">Code</a>
          </div>
          <br />
        </div>
      </div>
    );
  }
});
