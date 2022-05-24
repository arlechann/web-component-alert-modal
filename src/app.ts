import { AlertModal } from "./alertModal.js";

customElements.define('alert-modal', AlertModal);

const alertModal: AlertModal = document.getElementsByTagName('alert-modal')[0] as AlertModal;

const openButton: HTMLButtonElement = document.getElementById('open') as HTMLButtonElement;
openButton.addEventListener('click', () => {
  alertModal.open = true;
})

const closeButton: HTMLButtonElement = document.getElementById('close') as HTMLButtonElement;
closeButton.addEventListener('click', () => {
  alertModal.open = false;
})