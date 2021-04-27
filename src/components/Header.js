import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {logout} from '../services/auth';

import { Flex } from './UI';

const MenuItem = styled.div`
  padding: 10px;
`

const Header = () => {
  const user = useSelector(state => state.user)
  const handleOut = () => {
    logout();
  }
  return (
    <Flex>
      <Link to="/"><MenuItem>Home</MenuItem></Link>
      { user ? <MenuItem onClick={handleOut} >Salir</MenuItem> :  <Link to="/login"><MenuItem>Login</MenuItem></Link>} 
     
    </Flex>
  )
}

export default Header;