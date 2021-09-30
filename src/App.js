import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './routes';
import { getPRs } from './api';

function App(props) {
  React.useEffect(() => {
    (async () => {
      const resp = await getPRs('genialkartik');
      console.log(resp);
    })();
  }, [props]);

  return (
    <div className="App">
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
