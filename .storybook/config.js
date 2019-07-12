import { configure, addParameters  } from '@storybook/react';

import "./base.css";

  function loadStories() {
    require("../stories/Skeleton.story.js");
    require("../stories/Post.story.js");
  }
  
  addParameters({
    options: {
      name: 'Kurtosys Skeleton Loader',
      isFullscreen: false,
      showPanel: true,
    }
    
  });

configure(loadStories, module);
