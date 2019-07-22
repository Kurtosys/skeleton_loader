import React, { Component } from "react";
import { css } from "emotion";
import {
  skeletonClass,
  defaultBaseColor,
  defaultHighlightColor,
  defaultHeight
} from "../../skeleton";

export default class SkeletonGraphTheme extends Component {
 static defaultProps = {
   color: defaultBaseColor,
   highlightColor: defaultHighlightColor,
   height: defaultHeight
 };

 constructor(props) {
   super(props);

   this.themeGraphClass = css`
     .${skeletonClass} {
       background-color: ${props.color};
       background-image: linear-gradient(
         90deg,
         ${props.color},
         ${props.highlightColor},
         ${props.color}
       );
     }
   `;
 }

 render() {
   return <div className={this.themeGraphClass}>{this.props.children}</div>;
 }
}
