import { useLayoutEffect, useRef } from "react";
import EditorJS from '@editorjs/editorjs'; 

import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import TextVariantTune from '@editorjs/text-variant-tune';

import './Editor.css';

export default function Editor() {

  const ref = useRef<EditorJS | null>(null);

  useLayoutEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      autofocus: true,
      onReady() {
        console.log('ready')
      },
      async onChange() {
        console.log('change', await editor.save());
      },
      tools: {
        textVariant: TextVariantTune,
        header: Header,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
    });

    ref.current = editor;

  }, []);


  return <div id="editor" />;
}