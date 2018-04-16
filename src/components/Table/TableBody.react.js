// @flow
import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function TableBody({ className, ...props }: Props): React.Node {
  const classes = cn(className);
  return <tbody className={classes} {...props} />;
}

export default TableBody;
