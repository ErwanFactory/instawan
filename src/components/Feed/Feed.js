import React from 'react';
import Post from '../Post';
import './Feed.css';
import Filter from '../Filter';

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterDelete = this.handleFilterDelete.bind(this);
    }

    handleFilterDelete(filter) {

        this.props.onFilterDelete(filter);
    }

    render() {
        const filters = this.props.filters && this.props.filters.map(filter =>
            <Filter key={filter} filter={filter} onFilterDelete={this.handleFilterDelete} />);

        const posts = this.props.posts && this.props.posts.map(post =>
            <Post key={post.id}
                url={post.url}
                title={post.title}
                location={post.location}
                description={post.description}
                tags={post.tags} />);

        return (
            <div className="feed">
                <h2>Feed.</h2>
                <div className="filters">
                    {filters}
                </div>
                <div className="posts">
                    {posts.length === 0 && <div>Sorry no pictures found for those filters.</div>}
                    {posts}
                </div>
            </div>);
    }
}

export default Feed;
