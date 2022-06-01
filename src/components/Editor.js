import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

const Editor = ({ setQuery, value, setValue, isOpen }) => {

return(
    <AceEditor
    id="editor"
    aria-label="editor"
    mode="mysql"
    theme="github"
    name="editor"
    fontSize={16}
    minLines={15}
    maxLines={10}
    width="80%"
    showPrintMargin={false}
    showGutter
    placeholder="Write your Query here..."
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
    }}
    value={value}
    onChange={onChange}
    showLineNumbers
  />
)
};

export default Editor;