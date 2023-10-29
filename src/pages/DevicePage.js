import react from 'react'
import AppRouter from './Admin';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import styles from './DevicePage.css';

const DevicePage = () => {
  const device = {id:3, name: 'Iphone 7', price: 25000, rating:5, img:'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg'}
  const description = [
    {id:1, title:'Оперативная память', discription:'5 гб'},
    {id:2, title:'Камера', discription:'5 гб'},
    {id:3, title:'Камера', discription:'5 гб'},
    {id:4, title:'Камера', discription:'5 гб'},
    {id:5, title:'Камера', discription:'5 гб'}
  ]
  return (
    <Container className='mt-3'>
      <Row>
      <Col md={4}>
        <Image width={300} height={300} src={device.img}/>
      </Col>
      <Col md={4}>
        <Row className='d-flex flex-colomn align-aitem-center'>
          <h2>{device.name}</h2>
          <div class='oror'></div>
        </Row>
      </Col>
      <Col md={4}>
        <Card
        className="d-flex flex-column align-items-center justify-content-arround"
        style={{width:300, height:300, fontSize:32, border: '5px solid lightgrey'}}
        >
           <h3>{device.price}</h3>
           <button variant="outline-dark">Добавить в корзину</button>
        </Card>
      </Col>
      </Row>
      <Row className='d-flex flex-column mt-3'>
        <h1>Характеристики</h1>
        {description.map((info, index) => 
          <Row key={info.id}
          style={{background:index % 2 === 0 ? 'lightgrey' : 'transparent',padding:10}}
          >
            {info.title}: {info.discription}
          </Row> 
        )}
      </Row>
    </Container>
  );
}

export default DevicePage;
