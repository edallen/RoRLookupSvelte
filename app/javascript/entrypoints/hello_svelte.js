/* eslint no-console: 0 */
// Run this example by adding <%= vite_javascript_tag 'hello_svelte' %> (and
// <%= vite_stylesheet_tag 'hello_svelte' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Svelte!</div> at the bottom of the page.

import App from "../components/hello.svelte"

document.addEventListener("DOMContentLoaded", () => {
  const app = new App({
    target: document.body,
    props: {
      name: "Svelte",
    },
  })

  window.app = app
})