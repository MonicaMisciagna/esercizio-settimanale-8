import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormSearch() {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/results/${city}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };

    return (
        <Container>
            <h1 className='text-center font-weight-bold my-4 '>What's the weather?</h1>
            <Form className='my-2 testo' onSubmit={handleSubmit}>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Form.Control
                            className='w-50 formsearch text-white'
                            size="lg"
                            type="text"
                            placeholder="Write here the city..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          
                        />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default FormSearch;
