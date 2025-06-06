import type { ComponentPropsWithoutRef } from "react";

// Second approach to achive this
// This aproach has some downsides as ts try to merge the buttons and anchors props
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

// type predicate
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export const Button = (props: ButtonProps | AnchorProps) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return (
    <button className="button" {...props}>
      button
    </button>
  );
};

// First approach to achive this
/* type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

export const Button = (props: ButtonProps | AnchorProps) => {
  const { el } = props;

  if (el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return (
    <button className="button" {...props}>
      button
    </button>
  );
}; */
