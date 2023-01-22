import './LeftContent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { Component } from 'react';


class LeftContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        const options = {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              accept: 'application/json',
              Authorization: 'AIzaSyASG-o9q5CClEHHFWfkDwdSyglGK7Y-aro'
            }
          };
          
          
          fetch('https://api.yelp.com/v3/businesses/search?sort_by=rating&limit=5', options)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }


  render(){

    var{isLoaded, items} = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    else{

    return (
    <div className="LeftContent">

      
      <Container>
       <Row className="justify-content-md-center content-container">
        <Col>
        <Stack gap={3}>
            <div className="bg-none subhead2">Pick 3 locations you want to visit:</div>
            
        <Form>

            

                {items.map(item => {
                    <div key={item.id} className="mb-3">
                        <Form.Check 
                            type={'checkbox'}
                            id={`default`}
                            label={<div>
                                    Name: {item.name}
                                   </div>}
                        />
                
                    </div>
                })};

                
                <Form.Check 
                    type={'checkbox'}
                    id={`default`}
                    label={<div>Hello</div>}
                />
                

           

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
}
}

export default LeftContent;