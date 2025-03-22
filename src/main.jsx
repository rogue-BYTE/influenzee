import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider as ReduxProvider } from "react-redux";
import { Provider as ChakraProvider } from "@/components/ui/provider"

import { store } from "./store/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>,
)
