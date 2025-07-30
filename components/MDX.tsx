import { JSX } from "react";
import TopNav from "./TopNav";

export default function MDX(props: JSX.IntrinsicAttributes & { isViewer: unknown; }) {
    return (
        <>
            <section className="mdx-container">
                <TopNav {...props} />
            </section>
        </>
    )
};