/* eslint no-console: 0 */
// Run this example by adding <%= vite_javascript_tag 'hello_svelte' %> (and
// <%= vite_stylesheet_tag 'hello_svelte' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// It should render a div containing a field to enter an institution name, and after the "Look up button is pressed, find and display a list of institutions that might match and a best match." and display at the bottom of the page.

import App from "../components/RoRLookup.svelte"

document.addEventListener("DOMContentLoaded", () => {
  const app = new App({
    target: document.body,
    props: {
    },
  })

  window.app = app
})