// Application Configuration
const config = {
  // Editor Settings
  editor: {
    defaultViewMode: 'split', // 'edit', 'preview', or 'split'
    enableSpellCheck: true,
    tabSize: 2,
    enableEmoji: true,
    defaultTheme: 'light', // 'light' or 'dark'
  },
  
  // Publishing Settings
  publishing: {
    platforms: {
      github: {
        enabled: true,
        apiBaseUrl: 'https://api.github.com',
        // These will be overridden by environment variables
        username: process.env.REACT_APP_GITHUB_USERNAME || 'YOUR_GITHUB_USERNAME',
        token: process.env.REACT_APP_GITHUB_TOKEN || 'YOUR_GITHUB_TOKEN',
      },
      dropbox: {
        enabled: false,
        appKey: process.env.REACT_APP_DROPBOX_APP_KEY || 'YOUR_DROPBOX_APP_KEY',
      },
      googleDrive: {
        enabled: false,
        clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID || 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
      }
    },
    defaultFormat: 'markdown', // 'markdown', 'html', or 'pdf'
  },
  
  // Collaboration Settings
  collaboration: {
    enabled: false,
    signalingServer: process.env.REACT_APP_SIGNALING_SERVER || 'ws://localhost:3001',
    iceServers: [
      {
        urls: 'stun:stun.l.google.com:19302'
      }
    ]
  },
  
  // Storage Settings
  storage: {
    defaultStorage: 'local', // 'local', 'indexedDB', or 'cloud'
    autoSave: true,
    autoSaveInterval: 30000, // 30 seconds
    maxLocalStorageSize: 5242880, // 5MB
  },
  
  // Export Settings
  export: {
    formats: ['markdown', 'html', 'pdf', 'docx'],
    pdf: {
      pageSize: 'a4',
      margin: '1in'
    },
    html: {
      includeStyles: true,
      inlineAssets: false
    }
  },
  
  // Feature Toggles
  features: {
    graphView: true,
    pluginSystem: false,
    databaseProperties: false,
    realtimeCollaboration: false,
    versionHistory: true,
    templates: true,
    tags: true
  },
  
  // UI Settings
  ui: {
    language: 'en',
    fontSize: 16,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
    sidebarWidth: 250,
    showLineNumbers: true,
    enableAnimations: true
  }
};

// Environment-specific overrides
const environment = process.env.NODE_ENV || 'development';

if (environment === 'production') {
  // Production-specific configuration
  config.publishing.platforms.github.enabled = true;
  config.collaboration.signalingServer = 'wss://your-production-signaling-server.com';
} else if (environment === 'development') {
  // Development-specific configuration
  config.editor.enableEmoji = true;
  config.features.graphView = true;
}

export default config;
