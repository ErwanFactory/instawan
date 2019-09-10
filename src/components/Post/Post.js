import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import { Icon, Card, CardMedia, CardContent, CardActions, IconButton, Typography, Snackbar } from '@material-ui/core';
import copy from 'clipboard-copy';
import './Post.css';


class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false,
            open: false
        };

        this.like = this.like.bind(this);
        this.share = this.share.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    like() {
        this.setState({ liked: !this.state.liked });
    }

    share() {
        this.setState({ open: true });
        copy(this.props.url);
    }

    handleClose() {
        this.setState({ open: false });
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
                                <Icon color="secondary">favorite</Icon>
                            </IconButton>
                            :
                            <IconButton aria-label="add to favorites" onClick={this.like}>
                                <Icon>favorite_border</Icon>
                            </IconButton>
                        }
                        <IconButton aria-label="share" onClick={this.share}>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Copied to clipboard.</span>}
                    action={
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleClose}>
                            <CloseIcon />
                        </IconButton>}
                />
            </div>
        );
    }
}

export default Post;
