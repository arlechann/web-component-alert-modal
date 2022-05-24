declare type ModalProps = 'open';
export declare class Modal extends HTMLElement {
    private _root;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(prop: ModalProps, oldValue: string, newValue: string): void;
    static get observedAttributes(): ModalProps[];
    get open(): boolean;
    set open(value: boolean);
    render(): void;
}
export {};
//# sourceMappingURL=modal.d.ts.map