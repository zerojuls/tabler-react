// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function TableColHeader({ className, ...props }: Props): React.Node {
  const classes = cn(className);
  return <th className={classes} {...props} />;
}

export default TableColHeader;
