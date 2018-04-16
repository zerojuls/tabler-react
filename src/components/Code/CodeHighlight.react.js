// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CodeHighlight({ className, ...props }: Props): React.Node {
  const classes = cn(`highlight`, className);
  return <div className={classes} {...props} />;
}

export default CodeHighlight;
