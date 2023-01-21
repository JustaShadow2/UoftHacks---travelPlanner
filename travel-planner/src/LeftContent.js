import './LeftContent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';


function LeftContent() {
  return (
    <div className="LeftContent">
      
      <Container>
       <Row className="justify-content-md-center content-container">
        <Col>
        <Stack gap={3}>
            <div className="bg-none subhead2">Pick 3 locations you want to visit:</div>
            
        <Form>
      
            <div key={`default`} className="mb-3">
            <Form.Check 
                type={'checkbox'}
                id={`default`}
                label={<div>Hello</div>}
            />
            </div>

            <button className='button-submit' variant="primary" type="submit">
                Confirm
            </button>

            
      
        </Form>
        </Stack>
        </Col>
      </Row>
    </Container>

 

    

    </div>
  );
}

export default LeftContent;