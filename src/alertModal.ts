type AlertModalAttrs = 'open';

export class AlertModal extends HTMLElement {
  static get observedAttributes(): AlertModalAttrs[] {
    return ['open'];
  }

  get open(): boolean {
    return this.hasAttribute('open');
  }

  set open(value) {
    if (value) {
      this.setAttribute('open', 'true');
    } else {
      this.removeAttribute('open');
    }
    this.render();
  }

  connectedCallback(): void {
    this.open = !['false', 'null', '0', '', null].includes(this.getAttribute('open'));
    this.render();
  }

  render(): void {
    this.textContent = this.open ? 'Open!' : 'Closed';
  }
}