import { JSX } from "react";
import TopNav from "./TopNav";
import Markdown from "markdown-to-jsx";

export default function MDX(props: JSX.IntrinsicAttributes & { isViewer: unknown; }) {
    const { text } = props;
    const md = `# This is a header 1
## This is a header 2

hello world
[click me](https://www.google.com)
`;
    return (
        <>
            <section className="mdx-container">
                <TopNav {...props} />
                <article>
                    <Markdown>
                        {text.trim()}
                    </Markdown>
                </article>
            </section>
        </>
    )
};