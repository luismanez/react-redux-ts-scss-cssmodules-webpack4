import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './components/Header/Header';

ReactDOM.render(
    <Header 
        compiler="Typescript" 
        framework="React" 
        bundler="Webpack" />,
    document.getElementById('root'));