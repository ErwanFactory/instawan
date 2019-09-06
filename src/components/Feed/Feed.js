import React from 'react';
import Post from '../Post';

class Feed extends React.Component {

    render() {
        const posts = this.props.posts && this.props.posts.map(post => <Post key={post.id} />);

        return (
            <div className="feed">
                Feed.
                {posts}
            </div>);
    }
}

export default Feed;
