import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "../../skeleton";
import SkeletonGraphTheme from "./SkeletonGraph-theme";
import SkeletonTabTheme from "./SkeletonTab-theme";





export default class SkeletonGraph extends Component {
 static propTypes = {
   title: PropTypes.string,
   children: PropTypes.node,
   size: PropTypes.oneOf(["small", "large"]),
 };

 static defaultProps = {
   size: "small",
   height: "large",
 };

 
 getStyle() {
   const { size } = this.props;
   const baseStyle = {
     padding: "1rem",
     width: size === "large" ? "100%" : 400,
     maxWidth: "100%",
     margin: "0 auto 2rem",
     border: "1px solid #eee"
   };
   return Object.assign(baseStyle, {
     fontSize: size === "small" ? 16 : 25
   });
 }

 render() {
   return (
   <div>
     <SkeletonTabTheme>
       <Skeleton/>
     </SkeletonTabTheme>
         <SkeletonGraphTheme>
           <div style={this.getStyle()}>
      {this.props.children || <Skeleton height={600} />}
       </div>
     </SkeletonGraphTheme>
</div>
   );
 }
}
