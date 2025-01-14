import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider ,useAuth} from './context/AuthContext.jsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
    <App /></AuthProvider>
  </StrictMode>,
)
