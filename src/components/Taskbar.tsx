import { useState } from 'react';
import {
  AppBar,
  Button,
  Frame,
  Handle,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from 'react95';
import { useDate } from '../hooks/useDate';
import winLogo from '../assets/win-logo.png';
import octoCat from '../assets/octocat-icon.png';
import filmfolioLogo from '../assets/filmfolio-logo.png';

const Taskbar = () => {
  const [open, setOpen] = useState(false);
  const { date, time } = useDate();

  return (
    <AppBar className='rel'>
      <Toolbar className='f fjb'>
        <div style={{ display: 'flex', gap: '0.25em' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={winLogo}
              alt='windows logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          <Handle size={35} />
          <Button className='bold'>
            <img
              src={filmfolioLogo}
              alt='filmfolio logo'
              style={{ height: '16px', marginRight: 4 }}
            />
            FilmFolio
          </Button>
          {open && (
            <MenuList
              style={{
                position: 'absolute',
                left: '0',
                bottom: '100%',
                width: '100px',
              }}
              onClick={() => setOpen(false)}
            >
              <a
                href='https://github.com/ak0411/filmfolio'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MenuListItem>
                  <img src={octoCat} alt='octocat icon' />
                  GitHub
                </MenuListItem>
              </a>
              <Separator />
              <MenuListItem disabled>Logout</MenuListItem>
            </MenuList>
          )}
        </div>
        <Frame variant='well'>
          <div
            style={{
              display: 'flex',
              gap: '1em',
              alignContent: 'center',
              padding: '0 0.5em',
            }}
          >
            <div>{date}</div>
            <div>{time}</div>
          </div>
        </Frame>
      </Toolbar>
    </AppBar>
  );
};

export default Taskbar;
