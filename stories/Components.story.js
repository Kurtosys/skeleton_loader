import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from "../src";
import SkeletonGraph from "../src/components/skeletonGraph";

import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from "@storybook/addon-knobs";
storiesOf("Components", module)
.addDecorator(withInfo)
.addDecorator(withKnobs)
 .add('Graph component', () => (
  <div>
    <Skeleton count={10} />
    <SkeletonGraph/>
  </div>
 ));