import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    svelte({ hot: true
      /* plugin options described at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md */
    })
  ],
})
