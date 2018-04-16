// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color?: string,
  +width?: number,
|};

function ProgressBar({
  className,
  color = "",
  width = 0,
  ...props
}: Props): React.Node {
  const classes = cn(`progress-bar`, { [`bg-${color}`]: !!color }, className);
  return <div className={classes} style={{ width: `${width}%` }} {...props} />;
}

export default ProgressBar;
