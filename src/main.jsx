import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppWithIntro } from './components/IntroAnimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithIntro
      components={{
        pro: <App />,
        // kids: <KidsApp />,
        // school: <SchoolApp />,
        adv: <App />
      }}
    />
  </StrictMode>,
)
