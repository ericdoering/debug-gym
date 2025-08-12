import { JSX } from "react";
import TopNav from "./TopNav";

export default function Editor(props: JSX.IntrinsicAttributes & { isViewer: unknown; }) {
  const { text, setText } = props;
  return (
    <>
      <section className="questions-container">
        <TopNav {...props} />
        <textarea value={text} onChange={(e) => {
          setText(e.target.value)
        }} placeholder="" />
      </section>
    </>
  );
}
