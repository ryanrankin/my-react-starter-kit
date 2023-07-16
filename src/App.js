import packageJson from '../package.json';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Container} from "react-bootstrap";
import React, {useState} from "react";

function App() {
    const [appVersion] = useState(packageJson.version);
    return (
        <div className="App">
            <Container>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Button
                        variant="primary"
                        className="App-button"
                        href="https://github.com/ryanrankin/my-react-starter-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </Button>
                </header>

            </Container>
            <footer className="App-footer">Version {appVersion}</footer>
        </div>
    );
}

export default App;
