window.Navbar = React.createClass({
  render: function() {
    return (
      <div className="nav-bar" onClick={this.props.handleClick}>
        {
          this.props.tabs.map((tab) => {
            const tabKey = tab.replace(' ', '');
            const className = this.props.tabSelected === tabKey ? 'selected': '';
            return (
              <a key={tab} href="#" value={`Show${tabKey}`} className={className}>{tab}</a>
            )
          })
        }
      </div>
    );
  }
});
