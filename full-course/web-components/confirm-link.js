class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('Do you realy want to leave?')) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('bt-confirm-link', ConfirmLink, { extends: 'a' });