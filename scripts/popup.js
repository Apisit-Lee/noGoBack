// Change tab over scroll behavior when popup select changes.
const sel = document.getElementById('sel');
sel.onchange = function (ev) {
	const behavior = ev.target.value === 'notallow' ? 'contain' : 'auto';
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		NGB.changeOverscrollBehavior(tabs[0].id, behavior);
	});
};