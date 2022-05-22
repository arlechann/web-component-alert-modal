import { AlertModal } from "./alertModal.js";

customElements.define('alert-modal', AlertModal);

const alertModal: AlertModal = document.getElementsByTagName('alert-modal')[0] as AlertModal;

const button: HTMLButtonElement = document.getElementById('button') as HTMLButtonElement;
button.addEventListener('click', () => {
  alertModal.open = !alertModal.open;
})