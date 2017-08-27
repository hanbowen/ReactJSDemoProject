import React, { Component } from 'react';
import { Collapse, Container, Row, Col} from 'reactstrap';
import './Frame.css';

class Frame extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isLeftOpen: false
    };
  }

  toggle() {
    this.setState({
      isLeftOpen: !this.state.isLeftOpen
    });
  }

  render() {
    return (
        <Container fluid={true}>
          <Row>
            <Col className="Header" xs="12">{this.props.top}</Col>
          </Row>
          <Row>
            <Collapse isOpen={this.state.isLeftOpen}>
              <Col className="FloatLeft" lg="2">{this.props.left}</Col>
            </Collapse>
            <button className="ToggleBtn" onClick={this.toggle}>
              &#x2630;
            </button>
            <Col className="Left" lg="2">{this.props.left}</Col>
            <Col className="Main" xs="12" lg="10" >
              {this.props.main}
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Frame;
