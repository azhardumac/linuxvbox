Home = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        var posts = Posts.find().fetch();
        return {
            posts: posts
        }
    },
    getPosts(id){
        return Posts.find().fetch();
    },
    renderPosts(){
        return this.getPosts().map((post) => {
            return <Post key ={post._id} />
        });
    },
    render(){
        let allPosts = this.data.posts;
        console.log(allPosts);
        return(
            <div>
                <h1>
                    HEY
                </h1>
                <InsertPost />
                <br/>

                {this.renderPosts()}
            </div>
        )
    }
});