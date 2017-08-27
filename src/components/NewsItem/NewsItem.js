import React, { Component } from 'react';
import { Container, Row, Col, Tooltip} from 'reactstrap';
import './NewsItem.css';

class NewsItem extends Component {
    constructor(props) {
        super(props);

        this.tooltipToggle = this.tooltipToggle.bind(this);
        this.jumpToNewsPage = this.jumpToNewsPage.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    tooltipToggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    jumpToNewsPage(){
        window.open(this.props.newsItem.url);
    }

    render() {
        var newsItem = this.props.newsItem;
        return (
            <div className="NewsItemContainer" id={newsItem.url} onClick={this.jumpToNewsPage}>
                <div><img src={newsItem.urlToImage} className="NewsItemImage"/></div>
                <h2 className="NewsTitle">{newsItem.title}</h2>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={newsItem.url} toggle={this.tooltipToggle}>
                    {newsItem.description}
                </Tooltip>
            </div>
        );
    }
}

export default NewsItem;
