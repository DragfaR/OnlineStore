import react, { useContext } from 'react'
import { authRoutes, publicRoutes } from '../routes'
import { Route } from 'react-router'
import { Routes, Link, Navigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/const'
import { Context } from '../index'

const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user)
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route path = {path} key = {path} element= {<Component/>} />
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route path = {path} key = {path} element = {<Component/>} />
      )}
      <Route path="*" element={<Navigate to="/shop" />} />
    </Routes>
  );
  
}
export default AppRouter;
