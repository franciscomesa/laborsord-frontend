import React from 'react';
import './App.css';
import { TranscriptionPage } from './pages/TranscriptionPage';
import { AudioService } from './services/AudioService';
import { TranscriptionService } from './services/TranscriptionService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppStateProvider } from './LocalState';
import { Header } from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container } from './components/Container';

const audioService = new AudioService();
const transcriptionService = new TranscriptionService();

const App: React.FC = () => {
  return (
    <Container className="App">
      <AppStateProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/transcribe">
              <TranscriptionPage audioService={audioService}
                                 transcriptionService={transcriptionService}/>
            </Route>
            <Route path="*">
              <NotFoundPage/>
            </Route>
          </Switch>
        </Router>
      </AppStateProvider>
    </Container>
  );
};

export default App;
