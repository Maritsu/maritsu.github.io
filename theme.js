/* I have no idea what this code does,
 * because I stole it from some random website.
 * Why? 'Cuz I can't be fucking bothered to learn JS.
 */
const button = document.getElementsByClassName("theme")[0];
const theme = window.localStorage.getItem("theme");

if (theme === "light") document.body.classList.add("light");

function switchTheme() {
	document.body.classList.toggle("dark");
	if (theme === "dark") {
    	window.localStorage.setItem("theme", "light");
	} else {
		window.localStorage.setItem("theme", "dark");
	}
	window.location.reload();
}
