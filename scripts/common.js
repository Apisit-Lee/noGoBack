// NGB is the main common function set for noGoBack Chrome extension.
const NGB = {
  /**
   * Change over scroll behavior for a certain tab.
   * @param {string|number} tabId The target tab id
   * @param {string} val Target behavior, like 'auto', 'contain', 'none'.
   */
  changeOverscrollBehavior(tabId, val) {
    const code = `
			const style = document.createElement('style');
    		style.innerHTML = "html, body { overscroll-behavior: ${val}!important; }";
    		document.body.appendChild(style);
		`;
    chrome.tabs.executeScript(tabId, {
      code: `${code}`
    });
  }
};