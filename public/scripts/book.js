var BookBox = React.createClass({
  loadBookReccomendations: function() {
    $.ajax({
      url: encodeURIComponent(""),
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        console.log(data.items[0].selfLink);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("url", status, err.toString());
      }.bind(this),
    });
  },
  render: function() {
      //this.loadBookReccomendations();
      return (
        <div className="bookBox">
          <Book />
        </div>
      );
  }
});

var Book = React.createClass({
  render: function() {
    return(
      <div id="book">
          // Placeholder
          <img src="https://upload.wikimedia.org/wikipedia/en/f/fe/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" height="300" width="200"/>
      </div>
    );
  }
});
ReactDOM.render(
  // <CommentBox url="/api/comments" pollInterval={2000} />,
  <BookBox />,
  document.getElementById('content')
);
