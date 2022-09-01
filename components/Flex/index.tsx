import React, { CSSProperties } from "react";

interface FlexProps {
  children: React.ReactNode;
  justify?: string;
  align?: string;
  direction?: 'row' | 'column';
  className?: string;
}

const Flex = ({ children, justify, align, direction, ...restProps }: FlexProps) => {
    const proxyStyle: CSSProperties = {
        display: 'flex',
        justifyContent: justify || 'unset',
        alignItems: align || 'unset',
        flexDirection: direction || 'row',
      };
  return <div style={{ ...proxyStyle }} {...restProps}>{children}</div>;
};

export default Flex;
