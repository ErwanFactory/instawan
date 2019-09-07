import React from 'react';
import Post from '../Post';
import './Feed.css';
import Filter from '../Filter';

class Feed extends React.Component {

    render() {
        const posts = this.props.posts && this.props.posts.map(post => 
            <Post key={post.id}
                url={post.url}
                title={post.title}
                location={post.location}
                description={post.description}
                tags={post.tags} />);
        const filters = this.props.filters && this.props.filters.map(filter => <Filter key={filter} />);

        return (
            <div className="feed">
                <h2 className="text-left">Feed.</h2>
                <div className="filters">
                    {filters}
                </div>
                <div className="posts">
                    {posts}
                </div>
            </div>);
    }
}

export default Feed;
