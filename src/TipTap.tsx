import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './TipTap.css'

// define your extension array
const extensions = [
  StarterKit,
]

const content = '<p>Hello World!</p>'

export default function Tiptap() {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <></>
    </EditorProvider>
  )
}