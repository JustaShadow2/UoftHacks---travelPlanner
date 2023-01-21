import './ContentCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function ContentCard() {
  return (
    <div className="ContentCard">
      
      <Container>
       <Row className="justify-content-md-center content-container">
        <Col xs lg="4" className='left-content'>
          <LeftContent/>
        </Col>
        <Col xs lg='1'></Col>
        <Col xs lg="4" className='right-content'>
          <RightContent/>
        </Col>
      </Row>
    </Container>

 

    

    </div>
  );
}

export default ContentCard;
