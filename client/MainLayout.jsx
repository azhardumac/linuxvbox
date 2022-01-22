var React = require('react');
//You need this npm package to do createReactClass
var createReactClass = require('create-react-class');

MainLayout = createReactClass({
    render:function(){
        console.log(this.props.logThis);
        return (
            <div>
                {this.props.header}
                {this.props.content}
                {this.props.footer}
            </div>
        )
    }
});