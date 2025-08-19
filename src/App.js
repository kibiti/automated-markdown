import React from 'react';
import { EditorProvider } from './contexts/EditorContext';
import { CollaborationProvider } from './contexts/CollaborationContext';
import { ConfigProvider } from './contexts/ConfigContext';
import Layout from './components/Layout/Layout';
import './styles/App.css';

function App() {
  return (
    <ConfigProvider>
      <EditorProvider>
        <CollaborationProvider>
          <div className="App">
            <Layout />
          </div>
        </CollaborationProvider>
      </EditorProvider>
    </ConfigProvider>
  );
}

export default App;
