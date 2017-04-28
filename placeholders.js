var html = document.getElementsByTagName("html")[0];
html.innerHTML = html.innerHTML.replace(/placeholder_home/g, "Home");
html.innerHTML = html.innerHTML.replace(/placeholder_devteam/g, "Developers");
html.innerHTML = html.innerHTML.replace(/placeholder_projects/g, "Projects");
html.innerHTML = html.innerHTML.replace(/placeholder_downloads/g, "Downloads");
html.innerHTML = html.innerHTML.replace(/placeholder_lg/g, "Lazy Guy Jimmy");
html.innerHTML = html.innerHTML.replace(/placeholder_ipg/g, "iPhoneGuy1101");
html.innerHTML = html.innerHTML.replace(/emoji_happy/g, "<img class='emoji' src='/emojis/happy.png' width=32 height=24 />");