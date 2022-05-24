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
