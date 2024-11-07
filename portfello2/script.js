
// Initialize Swiper with cube effect, mousewheel, and keyboard controls
const swiper = new Swiper(".mySwiper", {
	effect: "cube",
	allowTouchMove: false, // Disable touch-based swipe
	grabCursor: false,     // Hide the grab cursor
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	mousewheel: true,      // Enable mousewheel navigation
	keyboard: {            // Enable keyboard navigation
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true, // This allows PageUp and PageDown keys to navigate
	},
});

// Function to update active link based on slide change
swiper.on("slideChange", function () {
	updateActiveLink(swiper.activeIndex);
});

// Function to navigate to a specific slide and update active link
function Navigate(index) {
	updateActiveLink(index);
	swiper.slideTo(index, 1000, true); // Slide to the selected index with a transition
}

// Helper function to update the active link in the sidebar
function updateActiveLink(activeIndex) {
	const links = document.querySelectorAll(".Links li");
	links.forEach(link => link.classList.remove("activeLink"));  // Remove active class from all links
	links[activeIndex].classList.add("activeLink");              // Add active class to the selected link
}




function toggleSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.classList.toggle("show-sidebar");

	// Add an event listener to detect clicks outside the sidebar
	if (sidebar.classList.contains("show-sidebar")) {
		document.addEventListener("click", closeSidebarOnClickOutside);
	} else {
		document.removeEventListener("click", closeSidebarOnClickOutside);
	}
}

function closeSidebarOnClickOutside(event) {
	const sidebar = document.querySelector(".sidebar");
	const menuButton = document.querySelector(".menu-button");

	// Check if the click is outside the sidebar and not on the menu button
	if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
		sidebar.classList.remove("show-sidebar");
		document.removeEventListener("click", closeSidebarOnClickOutside);
	}
}

