import React from "react";
import { storiesOf } from "@storybook/react";
import SideBySide from "./SideBySide";
import Post from "./Post";
import { SkeletonTheme } from "../src";

import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, number } from '@storybook/addon-knobs';
storiesOf("Post", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('as dynamic variables', () => {
    const post = text('Post Test', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum necjusto feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus aliquam ante, sit amet iaculis dolor posuere et. In ut placerat leo.");
    const content = `${post}`;
    return (
      <SideBySide>
        <Post />
        <Post title="A title">
        {content}
        </Post>
    </SideBySide>
    );
  })
  .add("default", () => (
    <SideBySide>
      <Post />
      <Post title="A title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
        justo feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus
        aliquam ante, sit amet iaculis dolor posuere et. In ut placerat leo.
      </Post>
    </SideBySide>
  ))
  .add("with large size", () => (
    <SideBySide>
      <Post size="large" />
      <Post size="large" title="A title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
        justo feugiat, auctor nunc ac, volutpat arcu. Suspendisse faucibus
        aliquam ante, sit amet iaculis dolor posuere et. In ut placerat leo.
      </Post>
    </SideBySide>
  ))
  .add("with different colors", () => (
    <div>
      <SkeletonTheme color="#1D5CA6" highlightColor="#164999">
        <Post />
      </SkeletonTheme>
      <SkeletonTheme color="#333" highlightColor="#4a4a4a">
        <Post />
      </SkeletonTheme>
    </div>
  ));
