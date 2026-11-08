"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  className?: string;
}

export default function TypingText({ words, className = "" }: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const holding = !deleting && text === word;

    const timer = setTimeout(
      () => {
        if (holding) {
          setDeleting(true);
        } else if (deleting) {
          if (text === "") {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          } else {
            setText(word.slice(0, text.length - 1));
          }
        } else {
          setText(word.slice(0, text.length + 1));
        }
      },
      holding ? 1400 : deleting ? 40 : 90
    );

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent"
      />
    </span>
  );
}