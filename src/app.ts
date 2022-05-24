import { Modal } from "./index.js";

customElements.define('x-modal', Modal);

const modal: Modal = document.getElementsByTagName('x-modal')[0] as Modal;

const openButton: HTMLButtonElement = document.getElementById('open') as HTMLButtonElement;
openButton.addEventListener('click', () => {
  modal.open = true;
});

const closeButton: HTMLButtonElement = document.getElementById('close') as HTMLButtonElement;
closeButton.addEventListener('click', () => {
  modal.open = false;
});