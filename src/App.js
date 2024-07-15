import './App.css';
import Layout from './layout4';
import { Typography } from '@mui/material';

function App() {
  return (
    <Layout>

        <Typography variant="h4" gutterBottom>
          Welcome to My Application
        </Typography>
        <Typography paragraph>
          This is a simple application using Material UI with a layout consisting of a header, sidebar, and main content area.
        </Typography>

    </Layout>

  );
}

export default App;
