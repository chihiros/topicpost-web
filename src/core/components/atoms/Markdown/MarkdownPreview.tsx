import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Note } from './Note';
import { Tweet } from 'react-tweet';

type Props = {
  children?: React.ReactNode;
};

export const MarkdownPreview: React.FC<Props> = ({ children }) => {
  return (
    <>
      <style>
        {`
              .md-style :where(code)::before,
              .md-style :where(code)::after {
                content: "";
              }
              .md-style ul {
                margin-top: 0;
                margin-bottom: 8px;
              }
            `}
      </style>
      <ReactMarkdown
        className='max-w-5xl md-style'
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, children, ...props }) => (
            <div className="font-bold mb-2 text-4xl" {...props}>
              {children || ''}
            </div>
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

            return isTweetLink ? (
              <div className='flex justify-center'>
                <Tweet
                  id={extractTweetId(href!)}
                />
              </div>
            ) : (
              <a className="text-blue-600 no-underline" {...props} >
                {children || ''}
              </a>
            );
          },
          code: ({ node, inline, className, children, ...props }) => {
            // const match = /language-(\w+)/.exec(className || '')
            return inline ? (
              <code className="bg-gray-200 text-blue-600 px-1 rounded text-sm" {...props}>
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
