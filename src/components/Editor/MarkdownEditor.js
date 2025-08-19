import React, { useState, useEffect } from 'react';
import './MarkdownEditor.css';

const MarkdownEditor = ({ content, onContentChange, isCollaborating }) => {
  const [value, setValue] = useState(content);

  useEffect(() => {
    setValue(content);
  }, [content]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onContentChange(newValue);
  };

  return (
    <div className="markdown-editor">
      <textarea
        className="editor-textarea"
        value={value}
        onChange={handleChange}
        placeholder="Start writing your markdown here..."
        disabled={isCollaborating ? false : false}
      />
    </div>
  );
};

export default MarkdownEditor;
