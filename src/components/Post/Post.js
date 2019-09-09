import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import { Icon, Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import './Post.css';


class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false
        };

        this.like = this.like.bind(this);
    }

    like() {
        this.setState({ liked: !this.state.liked });
    }

    render() {
        const tags = this.props.tags && this.props.tags.map(tag => <span href="#" className="tag" key={tag}>#{tag}</span>);

        return (
            <div className="post">
                <Card>
                    <CardMedia
                        image={this.props.url}
                        title={this.props.title}
                    />
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography gutterBottom component="h3" className="location">
                            <a href={"http://google.com/maps?q=" + this.props.location} target="_blank" rel="noopener noreferrer">{this.props.location}.</a>
                        </Typography>
                        <Typography color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                        <div className="d-flex">
                            {tags}
                        </div>
                    </CardContent>
                    <CardActions disableSpacing>
                        {this.state.liked ?
                            <IconButton aria-label="liked" onClick={this.like}>
                                <Icon>favorite</Icon>
                            </IconButton>
                            :
                            <IconButton aria-label="add to favorites" onClick={this.like}>
                                <Icon>favorite_border</Icon>
                            </IconButton>
                        }
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Post;
