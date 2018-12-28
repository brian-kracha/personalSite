import React, {Component} from 'react'
import {Grid,Row, Col} from 'react-bootstrap'

export default class HeaderView extends Component {
  handleSelect(eventKey, event) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Grid>
  <Row className="show-grid" style={styles.navBar}>
    <Col style= {styles.NavSubject} xs={2} md={2}>
      About Me
    </Col>
    <Col style= {styles.NavSubject} xs={2} md={2}>
      Projects
    </Col>
    <Col style= {styles.NavSubject} xs={2} md={2}>
      Contact
    </Col>
    <Col  mdOffset={6}>
      <code style= {styles.name}>{'<Brian Kracha/>'}</code>
    </Col>
  </Row>
</Grid>
    );
  }
}
const styles = {
  navBar:{
    background:"Black",
    height:60
  },
  NavSubject:{
    color:"white"
  },
  name:{
    fontSize:25
  }
}
