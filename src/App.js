import React from 'react';
import { EditorProvider } from './contexts/EditorContext';
import { CollaborationProvider } from './contexts/CollaborationContext';
import Layout from './components/Layout/Layout';
import './styles/App.css';

function App() {
  return (
    <EditorProvider>
      <CollaborationProvider>
        <div className="App">
          <Layout />
        </div>
      </CollaborationProvider>
    </EditorProvider>
  );
}

export default App;
