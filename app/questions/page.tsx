"use client";

import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function QuestionPage() {
  const { currentUser, isLoadingUser } = useAuth()
  const [isViewer, setIsViewer] = useState(false);
  const [text, setText] = useState("")
  const [showNav, setShowNav] = useState(false)

  function handleToggleViewer() {
    setIsViewer(!isViewer)
  }

  function handleToggleMenu() {
    setShowNav(!showNav)
  }

  if(isLoadingUser){
    return (
      <h6 className="text-gradient">Loading...</h6>
    )
  };


  if(!currentUser){
    window.location.href = "/"
  };


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
