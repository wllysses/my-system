import { GlobalProvider } from "./contexts/GlobalContext"
import { AppRoutes } from "./routes/routes"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <GlobalProvider>
      <GlobalStyle />
      <AppRoutes />
    </GlobalProvider>
  )
}

export default App