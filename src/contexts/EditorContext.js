import React, { createContext, useContext, useReducer } from 'react';

const EditorContext = createContext();

const initialState = {
  documents: [],
  currentDocument: null,
  isEditing: false,
  viewMode: 'edit', // 'edit', 'preview', or 'split'
  recentDocuments: []
};

function editorReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_DOCUMENT':
      return {
        ...state,
        currentDocument: action.payload
      };
    case 'UPDATE_CONTENT':
      return {
        ...state,
        currentDocument: {
          ...state.currentDocument,
          content: action.payload,
          lastModified: new Date().toISOString()
        }
      };
    case 'CREATE_NEW_DOCUMENT':
      const newDocument = {
        id: Date.now().toString(),
        title: 'Untitled Document',
        content: '',
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        tags: []
      };
      return {
        ...state,
        documents: [...state.documents, newDocument],
        currentDocument: newDocument,
        recentDocuments: [newDocument, ...state.recentDocuments.slice(0, 4)]
      };
    case 'CHANGE_VIEW_MODE':
      return {
        ...state,
        viewMode: action.payload
      };
    default:
      return state;
  }
}

export function EditorProvider({ children }) {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}
