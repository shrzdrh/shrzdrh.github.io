window.Blog = React.createClass({
  render: function()  {
    var scroll_node = this.refs.blog;
    if (scroll_node) {
      scroll_node.scrollTop = 0;
    }
    var componentStyles = "blog";
    componentStyles += this.props.show ? " show-blog" : " hide-blog";

    return (
      <div className={componentStyles} ref="blog">
        <div className="blog-content">
          <span className="question">How did I make these transitions?</span>
            <br />*Magic* and CSS3 transitions. Making them was a good exercise because
            I learned how z-index and display properties behave with eachother and
            also how to make a div touch to the very edge of the window, so no gaps!
            <br />
            For an element to cover the window edges (like how the body does), the window needs to
            know this style is important.<br />
            <img src="./images/slidein.png" /><br />
            I wanted the div above the nav bar to reach up to the top edge of the window so I could hide the
            other components underneath to perform the animations.
            @keyframes are a beautiful animation tool to define endpoints for css elements.
            In order for your elements to move in this way, they need to have a relative display.
            I used @keyframes for animating position, but you can animate other properties like this too!
            <br />Your designs are only limited by your imagination, seriously.<br />
          <span className="question">Most challenging bug with the simplest fix?</span><br />
            You have already seen it. Notice how this component scrolls to the top between tabs?
            I was bothered by the idea of creating a messy hack to force this to scroll up.
            I know there is a simple fix in vanilla javascript, but I am using React here so I was adding
            the hack to the lifecycle method componentDidMount as advised in the React docs. Nothing was
            changing and I saw the DOM node being grabbed in the browser dev tools. I already knew I could
            count on my render() so I put the code in there and voila! Behold the simple fix:<br />
          <img src="./images/scrollTop.png" /><br />
          <span className="question">Do I think I will return to Biology?</span><br />
            I enjoy reading the latest news in academia and cool papers in Nature and Cell Biology.
            I love knowing how a cell works and the mechanisms by which our genes are translated into
            proteins driving our bodily functions. And I love knowing how incredibly complex Biology is.
            Then there is designing and writing code, and learning about new ways to manipulate elements
            on a page. I love how I can build something and put it up on the interwebz so other people can
             see it. And all this is done as quick as I can make something up (and debug) and it is free!
            When I want to learn a new thing, I go on Stack Overflow or read issues on
            Github or blogs. The sources of information and people willing to teach others is vast.
            I love being part of such a helpful and passionate community. These are some of the reasons which
            will keep me in programming as a career and hobby.
        </div>
      </div>
    );
  }
});
