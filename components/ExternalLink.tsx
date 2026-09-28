import Link from "next/link";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "target" | "rel"
>;

/**
 * A link that opens in a new tab and tells assistive technology so.
 * Sighted users see nothing extra; screen readers hear "(opens in a new tab)".
 */
const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ children, ...props }, ref) => (
    <Link {...props} ref={ref} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </Link>
  )
);
ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
