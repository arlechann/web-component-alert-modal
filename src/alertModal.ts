type AlertModalProps = 'open';

export class AlertModal extends HTMLElement {
  private _root: ShadowRoot;

  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback(): void {
    this.open = !['false', 'null', '0', '', null].includes(this.getAttribute('open'));
    this.render();
  }

  attributeChangedCallback(prop: AlertModalProps, oldValue: string, newValue: string): void {
    this.render();
  }

  static get observedAttributes(): AlertModalProps[] {
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
  }

  render(): void {
    this._root.innerHTML = this.open ? '<h1>Open!</h1>' : '<h1>Closed</h1>';
  }
}