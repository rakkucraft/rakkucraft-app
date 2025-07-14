"use client";

import NextLink, { LinkProps } from "next/link";

type CustomLinkProps = {
  children: React.ReactNode;
} & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  children,
  href,
  ...props
}: CustomLinkProps) {
  const isExternal = typeof href === "string" && href.startsWith("http");
  const target = isExternal ? "_blank" : props.target;
  const rel = isExternal ? "noopener noreferrer" : props.rel;

  return (
    <NextLink href={href} target={target} rel={rel} {...props}>
      {children}
    </NextLink>
  );
}
