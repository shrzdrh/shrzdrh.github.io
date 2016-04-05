window.Projects = React.createClass({
  render: function() {
    var componentStyles = "projects";
    componentStyles += this.props.show ? " show-projects" : " hide-projects";

    return (
      <div className={componentStyles}>
        <div className="thumbnails">
          <span className="question">What have I pushed out into the Github ether?</span><br />
          <a href="http://sherizada.com/ski-free"><img src="./images/skier.png" />Ski Free</a>
          <a href="https://entente.io">Entente</a>
          <a href="https://github.com/sherzader/AnORM"><span className="curly-brax">&#123;&#125;</span>AnORM</a>
          <a href="https://instapixies.herokuapp.com">Instapixies</a>
        </div><br />
        <span className="question">What am I currently working on?</span><br />
          Hello App World!
          I am using my old Java skills to build an Android app. I want
          to use a remote API like I did with Instapixies to display user
          requested data. So far the biggest hurdle has been the environment
          set-up. Initially, I chose React Native but ran into a bug I unfortunately
          could not find a solution for. I gave Android Studio a try and the
          installation was a breeze. Onwards I go!
      </div>
    );
  }
});
