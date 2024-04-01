import App from '@/App'
import { GlobalStyles } from '@/styles'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <App />
    <GlobalStyles />
  </>
)
