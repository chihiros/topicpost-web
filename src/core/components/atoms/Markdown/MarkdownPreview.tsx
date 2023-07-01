import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
// import rehypeSanitize from 'rehype-sanitize';
import { Note } from './Note';
import { Tweet } from 'react-tweet';
import { ReactTinyLink } from 'react-tiny-link'

type Props = {
  children?: React.ReactNode;
};

// const sanitizeSchema = {
//   tagNames: ['img'],
// };

export const MarkdownPreview: React.FC<Props> = ({ children }) => {
  return (
    <>
      <style>
        {`
              .prose :where(code)::before,
              .prose :where(code)::after {
                content: "";
              }

              .non-prose-style :where(video):not(:where([class~="not-prose"] *)) {
                margin-top: 0;
                margin-bottom: 0;
              }

              .non-prose-style img {
                margin: 0;
              }

              .prose ul {
                margin-top: 0;
                margin-bottom: 8px;
              }
            `}
      </style>
      <ReactMarkdown
        className='max-w-5xl prose'
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, children, ...props }) => (
            <h1 className="font-bold mb-2" {...props}>
              {children || ''}
            </h1>
          ),
          h2: ({ node, children, ...props }) => (
            <h2 className="m-0 font-bold mb-2" {...props}>
              {children || ''}
            </h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3 className="m-0 font-bold mb-2" {...props}>
              {children || ''}
            </h3>
          ),
          h4: ({ node, children, ...props }) => (
            <h4 className="m-0 font-bold mb-2" {...props}>
              {children || ''}
            </h4>
          ),
          h5: ({ node, children, ...props }) => (
            <h5 className="m-0 mb-2" {...props}>
              {children || ''}
            </h5>
          ),
          h6: ({ node, children, ...props }) => (
            <h6 className="m-0 mb-2" {...props}>
              {children || ''}
            </h6>
          ),
          p: ({ node, ...props }) => (
            <p className="m-0 mb-1" {...props} />
          ),
          li: ({ node, children, ...props }) => (
            <li className="m-0 text-base" {...props} >
              {children || ''}
            </li>
          ),
          a: ({ node, children, ...props }) => {
            const href: string | undefined = props.href;
            const isTweetLink = href!.startsWith('https://twitter.com/') && href!.split('/').length === 6;

            const extractTweetId = (url: string): string => {
              const regex = /status\/(\d+)/;
              const match = url.match(regex);
              return match ? match[1] : "";
            }

            // Check if the link is not a tweet link
            if (!isTweetLink) {
              return (
                <div className="link-preview-container">
                  {/* <a className="text-blue-600 no-underline" {...props} >
                    {children || ''}
                  </a> */}
                  <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    maxLine={2}
                    minLine={1}
                    width="100%"
                    url={href!}
                  />
                </div>
              );
            }

            // If it's a tweet link, render the tweet
            return (
              <div className='non-prose-style flex justify-center' data-theme="light">
                <Tweet
                  id={extractTweetId(href!)}
                />
              </div>
            );
          },
          code: ({ node, inline, className, children, ...props }) => {
            // const match = /language-(\w+)/.exec(className || '')
            return inline ? (
              <code className="bg-gray-200 text-blue-600 px-1 rounded" {...props}>
                {children}
              </code>
            ) : (
              <pre className="bg-gray-800 text-gray-200 p-0 m-0 rounded" {...props}>
                {children}
              </pre>
            )
          },
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-800 text-gray-200 px-3 mt-3 rounded" {...props} />
          ),
          div: ({ node, children }) => {
            const className = node.properties?.className;
            if (Array.isArray(className)) {
              const stringClassName = className as string[];
              if (stringClassName.includes('note')) {
                const type = stringClassName.find((cls: string) => ['info', 'warn', 'alert'].includes(cls));
                return <Note type={type as 'info' | 'warn' | 'alert'} className="mb-3">{children}</Note>
              }
            }
            return <div>{children}</div>;
          },
          hr: ({ node, ...props }) => (
            <hr className="my-2" {...props} />
          ),
        }}
      >
        {children && typeof children === "string"
          ? children.replace(/:::note\s*(info|warn|alert)?\n([\s\S]*?)\n:::/g, (_, type = "info", content) =>
            `<div class="note ${type}">${content}</div>`
          )
          : ''
        }
      </ReactMarkdown>
    </>
  );
};
