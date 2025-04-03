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
 */
export class DddStepsListItem extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "";
    this.steps = 0;
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
      title: { type: String },
      steps: {type: Number, reflect: true}
      
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: flex;
        align-items: start;
        gap: var(--ddd-spacing-2, 8px)
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }
      .circle {
        width: 2rem;
        height: 2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1rem;
        margin-right: var(--ddd-spacing-4, 16px);
        background-color: var(--ddd-theme-default-beaverBlue, #caccd0);
        color: #fff;
        margin-top: 30px;
        position: absolute;
        
  
      }
      
      :host([data-primary]) .circle {
        background-color: var(--ddd-theme-default-beaverBlue, #1e407c);
        color: #fff;
      }
      
      
      .vl { 
      border-left: var(--ddd-border-md);
      margin-left:20px;
      border-left-style: dashed;
      border-left-color: var(--ddd-theme-default-limestoneGray);
    

      
      }
        
      .step-content {
        flex: 1;
        margin-left: var(--ddd-spacing-9, 8px);
       
      }
    
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
<div class="circle">${this.steps}</div>
<div class= "vl">
<div class="step-content"><slot></slot></div>
</div>

</div>`;
  }
  
  

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);