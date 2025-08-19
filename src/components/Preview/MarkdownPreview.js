import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './MarkdownPreview.css';

// Configure marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code).value;
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true
});

const MarkdownPreview = ({ content }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(content || '');
    return { __html: rawMarkup };
  };

  return (
    <div className="markdown-preview">
      <div 
        className="preview-content"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default MarkdownPreview;
