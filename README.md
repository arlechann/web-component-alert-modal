# How to Use

```html
<x-modal>
  <h1>Modal</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <button id="close">close</button>
</x-modal>
<button id="open">open</button>
```

```js
import { Modal } from "./index.js";

customElements.define('x-modal', Modal);

const modal = document.getElementsByTagName('x-modal')[0];

const openButton = document.getElementById('open');
openButton.addEventListener('click', () => {
  modal.open = true;
});

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
  modal.open = false;
});
```