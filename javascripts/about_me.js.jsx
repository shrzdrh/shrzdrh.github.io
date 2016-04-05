window.AboutMe = React.createClass({
  render: function()  {
    var scroll_node = this.refs.aboutme;
    if (scroll_node) {
      scroll_node.scrollTop = 0;
    }
    var styleClass = "about-me";
    styleClass += this.props.show ? " show-about" : " hide-about";
    return (
      <div className={styleClass} ref="aboutme">
        Dating back to when I was a kid,
        I remember my fascination with computers and human behavior.  I began
        studying Neuroscience in college, and picked up Computer Science classes
        after observing the problems bioinformatists got to think about.  While
        writing my first programs, I realized I wanted to make a life out of
        architecting solutions and optimizations for society through software.<br/>
        Here's what I've done professionally >> [resume].
        <img src="./images/mt_tam.jpg" />
        <span className="question">What is my technology palette?</span><br />
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
      </div>
    );
  }
});
