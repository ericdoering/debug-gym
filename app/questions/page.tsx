"use client";

import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import { useState } from "react";

export default function QuestionPage() {
  const [isViewer, setIsViewer] = useState(false);
  const [text, setText] = useState("")
  const [showNav, setShowNav] = useState(false)

  function handleToggleViewer() {
    setIsViewer(!isViewer)
  }

  function handleToggleMenu() {
    setShowNav(!showNav)
  }


  return (
    <>
      <main id="questions">
        <SideNav setShowNav={setShowNav} showNav={showNav} />
        {!isViewer && (
          <Editor handleToggleMenu={handleToggleMenu} setText={setText} text={text} isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
        )}
        {isViewer && (
          <MDX handleToggleMenu={handleToggleMenu} text={text} isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
        )}
      </main>
    </>
  );
}
