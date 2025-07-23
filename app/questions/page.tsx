import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";

export default function QuestionPage() {
  const isViewer = true;

  return (
    <>
      <main id="questions">
        <SideNav />
        {!isViewer && (
          <Editor hello="world" isViewer={isViewer} />
        )}
        {isViewer && (
          <MDX />
        )}
      </main>
    </>
  );
}
