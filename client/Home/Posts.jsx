Post = React.createClass({
    render(){
        let {postId} = this.props;
        console.log();
        return(
            <div className="card">
                <h3>{post.user}</h3>
                <p>{post.content}</p>
            </div>
        )
    }
});