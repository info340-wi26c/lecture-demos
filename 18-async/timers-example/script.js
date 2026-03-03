/*
  this is the pet photos assignment
*/

"use strict";

(function () {

  window.addEventListener("load", init);

  function init() {

    let imgs = qsa('.img-cross');
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', flipTimer);
    }
  }

  function flipTimer() {
    let container = this;

    // determine which (1st or 2nd) is opaque
    let firstChildOpacity = getOpacity(container.children[0]);
    let childToOpaque = firstChildOpacity === 1 ? 1 : 0;
    let childToTransparent = !childToOpaque + 0;

    let fadeTimeMs = 2000;
    let fadeIncrement = 0.01;

    // flip 'em
    let tId = setInterval(() => {
      let imgs = container.children;
      let opaque = getOpacity(imgs[childToOpaque]);
      if (opaque === 1) {
        clearInterval(tId);
      } else {
        modifyOpacity(imgs[childToOpaque], fadeIncrement);
        modifyOpacity(imgs[childToTransparent], -fadeIncrement);
      }
    }, fadeTimeMs / (1/ fadeIncrement));
  }

  /**
   * Modifies the given element's opacity by the given amount
   * 
   * @param {HTMLElement} el - the element's style to modify
   * @param {number} amount - how much to change it by.
   */
  function modifyOpacity(el, amount) {
    let current = el.computedStyleMap().get('opacity').value;
    el.style.opacity = current + amount;
  }

  /**
   * 
   * @param {HTMLElement} el 
   * @returns {number} the current opacity value
   */
  function getOpacity(el) {
    return el.computedStyleMap().get('opacity').value;
  }

  /**
   * 
   * @param {string} selector - The selector that we want to find in the DOM
   * @returns {HTMLElement}
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
    * 
    * @param {string} selector - The selector that we want to find in the DOM
    * @returns {NodeList}
    */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();