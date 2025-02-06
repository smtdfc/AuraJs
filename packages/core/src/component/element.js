export class RumiousComponentElement extends HTMLElement{
  constructor(){
    super();
    this.instance = null;
    this.ref =null;
  }
  
  setRef(ref){
    this.ref = ref;
  }
  
  init(componentConstructor,props,wrapped={},renderer){
    this.instance = new componentConstructor();
    this.instance.prepare(this,props,wrapped,renderer);
    this.instance.onInit()
  }
  
  connectedCallback(){
    this.instance.onCreate();
    this.instance.requestRender();
    this.instance.forwardRef = this.ref ?? {};
  }
  
  
  disconnectCallback(){
    this.instance.onDestroy()
    this.instance.requestCleanUp()
  }
}

export function createComponentElement(){
   return document.createElement("a-component");
}

window.customElements.define("a-component",RumiousComponentElement);