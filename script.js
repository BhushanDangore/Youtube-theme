let styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = chrome.extension.getURL("themeStyles.css");
document.head.append(styles);