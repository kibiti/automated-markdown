import React, { createContext, useContext, useReducer } from 'react';
import config from '../config';

const ConfigContext = createContext();

function configReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CONFIG':
      return {
        ...state,
        ...action.payload
      };
    case 'RESET_CONFIG':
      return config;
    case 'TOGGLE_FEATURE':
      return {
        ...state,
        features: {
          ...state.features,
          [action.payload]: !state.features[action.payload]
        }
      };
    default:
      return state;
  }
}

export function ConfigProvider({ children }) {
  const [state, dispatch] = useReducer(configReducer, config);

  const updateConfig = (newConfig) => {
    dispatch({ type: 'UPDATE_CONFIG', payload: newConfig });
  };

  const resetConfig = () => {
    dispatch({ type: 'RESET_CONFIG' });
  };

  const toggleFeature = (featureName) => {
    dispatch({ type: 'TOGGLE_FEATURE', payload: featureName });
  };

  const value = {
    config: state,
    updateConfig,
    resetConfig,
    toggleFeature
  };

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
}
