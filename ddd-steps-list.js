/**
 * Copyright 2025 MSchwin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 * 
 * 
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.dddPrimary = false;
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-steps-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      dddPrimary: { type: Boolean, attribute: 'ddd-primary', reflect: true }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
     
        
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
<slot @slotchange="${this._onSlotChange}"></slot>
</div>`;
  }



  firstUpdated() {
    this._validateChildren();
  }

  _onSlotChange() {
    this._validateChildren();
  }
  _validateChildren() {
    const children = Array.from(this.querySelectorAll('ddd-steps-list-item'));
    let stepCount = 0;
    children.forEach(child => {
      stepCount++;
      child.steps = stepCount;
      if (this.dddPrimary) {
        child.setAttribute('data-accent', '');
      } else {
        child.removeAttribute('data-accent');
      }
    });
  }

  updated(changedProps) {
    if (changedProps.has('dddPrimary')) {
      const items = this.querySelectorAll('ddd-steps-list-item');
      items.forEach(item => {
        if (this.dddPrimary) {
          item.setAttribute('data-accent', '');
        } else {
          item.removeAttribute('data-accent');
        }
      });
    }
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);