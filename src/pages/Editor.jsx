import React from "react";
import Header from "../components/Header";

import { EditorData } from "../data/dummy";

import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

const Editor = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
