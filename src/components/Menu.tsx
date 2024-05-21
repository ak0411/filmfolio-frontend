import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react95';

const styleButton: React.CSSProperties = {
  flexGrow: 1,
  fontSize: '1.5em',
};

const Menu = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;

  return (
    <div className='f' style={{ gap: '1em' }}>
      <Link className='f fg' to='/films'>
        <Button style={styleButton}>Films</Button>
      </Link>
      <Link className='f fg' to='/login'>
        <Button style={styleButton}>Login</Button>
      </Link>
      <Link className='f fg' to='/register'>
        <Button style={styleButton}>Register</Button>
      </Link>
    </div>
  );
};

export default Menu;
