import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: '椒椒的乐园',
    social: {
      github: 'https://github.com/namezzy'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Post',
      autogenerate: {
        directory: 'post'
      }
    }, {
      label: 'Learn React',
      autogenerate: {
        directory: 'Learn React'
      }
    }
  
  ]
  }), react()]
});