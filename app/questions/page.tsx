"use client";

import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import { useState } from "react";

export default function QuestionPage() {
  const [isViewer, setIsViewer] = useState(true);

  function handleToggleViewer() {
    console.log("IS VIEWER", isViewer)
    setIsViewer(!isViewer)
  }


  return (
    <>
      <main id="questions">
        <SideNav />
        {!isViewer && (
          <Editor isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
        )}
        {isViewer && (
          <MDX isViewer={isViewer} handleToggleViewer={handleToggleViewer} />
        )}
      </main>
    </>
  );
}
