InsertPost = React.createClass({
    insertToCollection(event) {
        event.preventDefault();
        var content = $('#post-body').val();
        console.log('content', content);
        var user = $('#user').val();


        Posts.Insert({
            content: content,
            user: user,
            dateAdded: new Date()
        });
    },

    render() {
        return (
            <div>
                <form onSubmit={this.insertToCollection}>
                    <input className="form-control" id="user" placeholder="User Name"/><br/>
                    <textarea placeholder="Type here" className="form-control" id="post-body"></textarea><br/>
                    <button className="btn btn-info" onClick={this.insertToCollection}>Save</button>
                </form>
            </div>
        )
    }
});