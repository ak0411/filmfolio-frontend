import { CSSProperties, FC, useState } from 'react';
import { Button, Tab, TabBody, Tabs } from 'react95';
import styled from 'styled-components';
import Films from './Films';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5em;
  gap: 1em;
`;

const Header = styled.h1`
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const styleTab: CSSProperties = {
  fontSize: '1.5em',
  padding: '0 2em',
};

const FilmFolio: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setActiveTab(value);
  };
  return (
    <Wrapper>
      <Header>
        <span>Welcome to FilmFolio!</span>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </Header>
      <div className='f fc fg'>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab style={styleTab} value={0}>
            Films
          </Tab>
          <Tab style={styleTab} value={1}>
            Users
          </Tab>
        </Tabs>
        <TabBody className='f fc fg'>
          {activeTab === 0 && <Films />}
          {activeTab === 1 && <h1>Here show users</h1>}
        </TabBody>
      </div>
    </Wrapper>
  );
};

export default FilmFolio;
