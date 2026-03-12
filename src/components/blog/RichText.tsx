import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

// Custom renderers that match the existing dark blog UI style
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="leading-relaxed text-gray-400 mb-4">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-white mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-white mt-6 mb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-green-500 pl-4 my-4 text-gray-400 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-2 my-4 text-gray-400 list-none">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-2 my-4 text-gray-400 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2">
        <span className="text-green-500 font-mono mt-0.5 shrink-0">›</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-gray-300 italic">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-green-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 underline underline-offset-4 hover:text-green-300 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-xl overflow-hidden border border-gray-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={value?.asset?.url ?? ""}
          alt={value?.alt ?? ""}
          className="w-full h-auto"
        />
        {value?.alt && (
          <p className="text-xs text-center text-gray-600 py-2 font-mono">{value.alt}</p>
        )}
      </div>
    ),
    code: ({ value }) => (
      <pre className="bg-gray-900 border border-gray-800 rounded-xl p-5 my-6 overflow-x-auto">
        <code className="text-green-400 text-sm font-mono leading-relaxed">
          {value?.code}
        </code>
      </pre>
    ),
  },
};

interface RichTextProps {
  value: TypedObject[];
}

export function RichText({ value }: RichTextProps) {
  return <PortableText value={value} components={components} />;
}