import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import NewsItem from './../components/NewsItem/NewsItem';

var api = require('./../services/NewsAPIs');

class News extends Component {
    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
        this.state = {articles: []};
    }

    loadData(props){
        var source = props.match.params.source;
        api.fetchArticles(source)
            .then(function (response) {
                if(response){
                    this.setState({articles: response});
                }
            }.bind(this));
    }

    componentDidMount() {
        this.loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps);
    }

    render() {
        var nodeColumn1 = [];
        var nodeColumn2 = [];
        var nodeColumn3 = [];
        var articles = this.state.articles;
        if (articles.length > 0) {
            var counter = 1;
            var newNode;
            articles.forEach((article)=> {
                if (article) {
                    newNode = <NewsItem newsItem={article} key={article.url}/>;

                    /*Add news items to 3 columns.*/
                    if (counter % 3 === 1) {
                        nodeColumn1.push(newNode);
                    } else if (counter % 3 === 2) {
                        nodeColumn2.push(newNode);
                    } else {
                        nodeColumn3.push(newNode);
                    }
                }
                counter++;
            });
        }

        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col xs="12" md="4">{nodeColumn1}</Col>
                        <Col xs="12" md="4">{nodeColumn2}</Col>
                        <Col xs="12" md="4">{nodeColumn3}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default News;
