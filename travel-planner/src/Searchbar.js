import './Searchbar.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Searchbar() {
  return (
    <div className="Searchbar">
      
    <Form className='search'>
      <Form.Group className="mb-3 search-form">
        <Form.Control type="email" placeholder="Where do you want to go next?" />       
      </Form.Group>

      
      <Button className='button-submit' variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  );
}

export default Searchbar;
