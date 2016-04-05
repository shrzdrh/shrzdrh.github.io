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
          <span className="curly-brax">&#123;&#125;</span>Ski Free a vanilla JS game based off of the Microsoft classic.
          <a href="https://sherizada.com">[Live]</a><a href="https://github.com/sherzader/ski-free">[Code]</a><br />
          <span className="curly-brax">&#123;&#125;</span>Entente is a web app that allows users to create, edit, and follow groups and search upcoming events using a calendar widget.
          <a href="https://entente.io">[Live]</a><a href="https://github.com/sherzader/entente">[Code]</a><br />
          <span className="curly-brax">&#123;&#125;</span>AnORM is a variation of Active Record, an object relational mapper.
          <a href="https://github.com/sherzader/AnORM">[Code]</a><br />
          <span className="curly-brax">&#123;&#125;</span>Instapixies is a web app that uses your hashtag search to fetch photos/videos from Instagram via the Instagram API.
          <a href="https://instapixies.herokuapp.com">[Live]</a><a href="https://github.com/sherzader/instapixies">[Code]</a>
        </div><br />
        <span className="question">What am I currently working on?</span>
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
