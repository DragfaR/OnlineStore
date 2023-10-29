import react from 'react'
import AppRouter from '../components/AppRouter';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../shop.css'
import TypeBar from "../components/TypeBar"
import Popular from '../components/Popular';
import Info from "../components/Info"
import Resistors from '../components/Resistors';
import Bottommenu from '../components/Bottommenu';

const Shop = () => {
  return (
    <div>
    <Container>
        <Row className='mt-2'>
            <Info/>
            <Popular/>
        </Row>
    </Container>
    <div>
      <TypeBar/>
      <Resistors/>
    </div>
    <Bottommenu/>
    </div>
  );
}

export default Shop;
