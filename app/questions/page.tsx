"use client";

import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import { useState } from "react";

export default function QuestionPage() {
  const [isViewer, setIsViewer] = useState(true);
  const [text, setText] = useState("")

  function handleToggleViewer() {
    console.log("IS VIEWER", isViewer)
    setIsViewer(!isViewer)
  }


  return (
    <>
      <main id="questions">
        <SideNav />
        {!isViewer && (
          <Editor setText={setText} text={text} isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
        )}
        {isViewer && (
          <MDX text={text} isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
        )}
      </main>
    </>
  );
}
