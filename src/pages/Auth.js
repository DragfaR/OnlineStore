import react from 'react'
import AppRouter from '../components/AppRouter';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/card'; 
import { Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom'; 
import { LOGIN_ROUTE, REGESTRATION_ROUTE } from '../utils/const'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
           <Form.Control 
            placeholder='Введите e-mail...'
            className='mt-3'
          />
          <Form.Control 
            placeholder='Введите ваш пароль...'
            className='mt-3'
          />
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ? <div>
                Нет аккаунта? <NavLink to={REGESTRATION_ROUTE}>Зарегестрируйся!</NavLink>
              </div>
            :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <button 
              className="mt-3 align-self-end" 
              data-bs-theme="dark"
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
