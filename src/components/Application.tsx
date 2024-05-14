import { CSSProperties, FC, ReactNode } from 'react';
import { Button, Window, WindowContent, WindowHeader } from 'react95';

const minimizeIconPath = `M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z`;
const maximizeIconPath = `M170.666667 170.666667 853.333333 170.666667 853.333333 853.333333 170.666667 853.333333 170.666667 170.666667M256 341.333333 256 768 768 768 768 341.333333 256 341.333333Z`;
const closeIconPath = `M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z`;

const styleSvgMinimize: CSSProperties = {
  height: '40%',
};

const styleSvgMaximize: CSSProperties = {
  height: '75%',
};

const styleSvgClose: CSSProperties = {
  height: '65%',
};

interface Props {
  name: string;
  children: ReactNode;
}

const Application: FC<Props> = ({ name, children }) => {
  return (
    <Window className='f fc fg'>
      <WindowHeader className='f fac fjb'>
        <span>{name}</span>
        <div className='f fac'>
          <Button>
            <svg style={styleSvgMinimize} viewBox='0 0 512 512'>
              <path d={minimizeIconPath} />
            </svg>
          </Button>
          <Button>
            <svg style={styleSvgMaximize} viewBox='0 0 1024 1024'>
              <path d={maximizeIconPath} />
            </svg>
          </Button>
          <Button>
            <svg style={styleSvgClose} viewBox='0 0 512 512'>
              <path d={closeIconPath} />
            </svg>
          </Button>
        </div>
      </WindowHeader>
      <WindowContent className='f fullh np'>{children}</WindowContent>
    </Window>
  );
};

export default Application;
