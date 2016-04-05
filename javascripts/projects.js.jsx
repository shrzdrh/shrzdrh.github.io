window.Projects = React.createClass({
  render: function() {
    var componentStyles = "projects";
    componentStyles += this.props.show ? " show-projects" : " hide-projects";

    return (
      <div className={componentStyles}>
        <span className="question">What is my technology palette?</span>
          As an undergrad, I coded data structures in Java. Then when learning
          web development I wrote them in Ruby. I solve algorithm challenges
          on LeetCode&HackerRank. The stack I have worked in is Ruby on Rails,
          PostgreSQL, React, jQuery, HTML5/CSS3. I know database design, how to use BCrypt
          for user auth, and am familiar with scalability concepts.
          I am aware of security hazards/solutions for XSS, CSRF, and
          SQL injection. I have an understanding of how the internet works and
          learned how MVC web frameworks work through metaprogramming versions of Active Record
          and Rails. I get how to design a responsive UI and will always be learning how
          to manipulate HTML elements with CSS and JavaScript.<br />
        <div className="thumbnails">
          <span className="question">What have I pushed out into the ether?</span>
          <a href="http://sherizada.com/ski-free">Ski Free</a>
          <a href="https://entente.io">Entente</a>
          <a href="https://github.com/sherzader/AnORM">AnORM</a>
          <a href="https://github.com/sherzader/instapixies">Instapixies</a>
        </div><br />
        <span className="question">What am I currently working on?</span><br />
          Hello App World!
          I am using my old Java skills to build an Android app. I want
          to use a remote API like I did with Instapixies to display user
          requested data.
      </div>
    );
  }
});
