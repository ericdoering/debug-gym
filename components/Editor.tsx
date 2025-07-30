import { JSX } from "react";
import TopNav from "./TopNav";

export default function Editor(props: JSX.IntrinsicAttributes & { isViewer: unknown; }) {
  return (
    <>
      <section className="questions-container">
        <TopNav {...props} />
        <textarea placeholder="" />
      </section>
    </>
  );
}
