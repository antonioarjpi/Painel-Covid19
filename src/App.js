import { StylesProvider } from '@material-ui/styles'  
import GlobalStyle from './styles/global-styles';
import Main from './views/main/main';

function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
