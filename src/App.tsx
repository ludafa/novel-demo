// import Tiptap from './Editor';

import { NovelEditor } from './novel';

export default function App() {
  return (
    <div>
      <nav className="border-b">
        <h1 className="flex h-12 items-center px-4 md:container md:mx-auto md:px-0">Vite + React</h1>
      </nav>
      <div className="mt-4 md:container md:mx-auto">
        <NovelEditor />
      </div>
    </div>
  );
}
