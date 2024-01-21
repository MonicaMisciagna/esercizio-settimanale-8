
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import CardResults from '../components/CardResults';  
import { Button } from 'react-bootstrap';


function ResultsPage() {
  const { city } = useParams();
  const navigate = useNavigate();

  return (
   <Container className="text-center">
      <h2 className='my-4 py-4 text-center text-white cardin'>Today in {city}
     </h2>
     <CardResults city={city} />
     <div className="text-muted">
     <Button variant="outline-light" size="lg" className="mt-4" onClick={() => navigate('/')}>Back</Button> 
        </div>
    </Container>
  );
}

export default ResultsPage;
