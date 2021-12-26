// Create one context menu item, toggle over scroll behavior when clicked.
document.addEventListener('DOMContentLoaded', function () {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    title: '禁用页面滚动边界行为',
    onclick(info, tab) {
      try {
        NGB.changeOverscrollBehavior(tab.id, 'contain');
      } catch (e) {
        console.error(e);
        alert('啊哦，失败咯~');
      }
    }
  });
});