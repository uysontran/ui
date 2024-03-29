import { Content } from "@radix-ui/react-accordion";

import { styled, keyframes } from "stitches";
import { forwardRef } from "react";

const AccordionUp = keyframes({
  "0%": { height: "0" },
  "100%": { height: "var(--radix-accordion-content-height)" },
});
const AccordionDown = keyframes({
  "0%": { height: "var(--radix-accordion-content-height)" },
  "100%": { height: "0" },
});
const StyledContent = styled(Content, {
  overflow: "hidden",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",

  "&[data-state='closed']": {
    animation: `${AccordionDown} 0.2s ease-out`,
  },

  "&[data-state=open]": {
    animation: `${AccordionUp} 0.2s ease-out`,
  },
});

const StyledContentContainer = styled("div", {
  paddingTop: "0",
  paddingBottom: "1rem",
});
export const AccordionContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <StyledContent ref={ref} className="content" {...props}>
    <StyledContentContainer>{children}</StyledContentContainer>
  </StyledContent>
));
AccordionContent.displayName = Content.displayName;
