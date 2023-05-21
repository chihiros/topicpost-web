import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Note } from './Note';

type Props = {
  children?: React.ReactNode;
};

export const MarkdownPreview: React.FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
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
        a: ({ node, children, ...props }) => (
          <a className="text-blue-600 no-underline" {...props} >
            {children || ''}
          </a>
        ),
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
        ? children.replace(/:::note (info|warn|alert)\n([\s\S]*?)\n:::/g, (_, type, content) =>
            `<div class="note ${type}">${content}</div>`
          )
        : ''
      }
    </ReactMarkdown>
  );
};