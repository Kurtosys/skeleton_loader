import React, { Component } from "react";
import { css } from "emotion";
import {
  skeletonClass,
  defaultBaseColor,
  defaultHighlightColor,
		defaultWidth,
defaultTabHeight
} from "../../skeleton";

export default class SkeletonTabTheme extends Component {
 static defaultProps = {
   color: defaultBaseColor,
   highlightColor: defaultHighlightColor,
			width: defaultWidth,
			height: defaultTabHeight

 };

 constructor(props) {
   super(props);

   this.themeTabClass = css`
     .${skeletonClass} {
       background-color: ${props.color};
       width: ${props.width};
							height: ${props.height};
							max-width: 500px;
       background-image: linear-gradient(
         90deg,
         ${props.color},
         ${props.highlightColor},
         ${props.color}
       );
       margin: 0 auto;
       position: relative;
       text-align: center;
     }
     
   `;
 }

 render() {
   return <div className={this.themeTabClass}>{this.props.children}</div>;
 }
}
