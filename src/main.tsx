import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from '@context/global/GlobalContext.tsx';
import { ScreenProvider } from '@context/screen/ScreenContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalProvider>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </GlobalProvider>
  </BrowserRouter>
);
