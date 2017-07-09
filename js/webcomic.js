$(document).ready(function () {
	//initialize navigation-buttons for webcomics
	let webcomicWrappers = $(".webcomic-wrapper");

	//only continue if at least one comic exists on the site
	if (webcomicWrappers.length > 0) {
		webcomicWrappers.each(function () {
			let webcomicWrapper = $(this);

			//update disabled-states
			updateNavigationButtons(webcomicWrapper);

			//initialize buttons
			webcomicWrapper.find(".previous").on("click", function (event) {
				event.preventDefault();
				let webcomicPage = parseInt(webcomicWrapper.find(".webcomic-page").attr("comic-currentPage"));
				navigateToPage(webcomicWrapper, webcomicPage - 1);
			})

			webcomicWrapper.find(".jumpTo a").on("click", function (event) {
				event.preventDefault();
				//get the parent-div
				let jumpToWrapper = $(this).parent();

				jumpToPageEvent(webcomicWrapper, jumpToWrapper);
			})

			webcomicWrapper.find(".jumpTo input").on("keypress", function(event) {
				//if enter was pressed
				if(event.which == 13) {
					//get the parent-div
					let jumpToWrapper = $(this).parent();

					jumpToPageEvent(webcomicWrapper, jumpToWrapper);
				}
			})

			webcomicWrapper.find(".next").on("click", function (event) {
				event.preventDefault();
				let webcomicPage = parseInt(webcomicWrapper.find(".webcomic-page").attr("comic-currentPage"));
				navigateToPage(webcomicWrapper, webcomicPage + 1);
			})
		})
	}

});

/** This function gets called either if the user clicked on the jump-to-page button or if he pressed enter */
function jumpToPageEvent(webcomicWrapper, jumpToWrapper) {
	let jumpToInput = jumpToWrapper.find("input");
	let requestedPage =	parseInt(jumpToInput.val());
	//clear input
	jumpToInput.val("");

	//if the requested page is an integer, we will continue
	if(requestedPage) {
		navigateToPage(webcomicWrapper, requestedPage);
	}
}

/** Navigate to a specific webcomic page */
function navigateToPage(webcomicWrapper, requestedPage) {
	let webcomicImage = $(webcomicWrapper).find(".webcomic-page");
	let maxPage = parseInt(webcomicImage.attr("comic-pages"));
	let currentPage = webcomicImage.attr("comic-currentPage");
	let urlBase = webcomicImage.attr("comic-url-base");

	if (requestedPage <= 0 || requestedPage > maxPage || requestedPage == currentPage) {
		//yeah, something went wrong.. the requested page is either the same as the currently loaded one or it's out of bounce
		return;
	}

	//update current page
	webcomicImage.attr("comic-currentPage", requestedPage);

	updateNavigationButtons(webcomicWrapper);

	//scroll to top
	$("html, body").animate({ scrollTop: webcomicWrapper.offset().top }, 300);

	//fadeout, replace image, fade in
	webcomicImage.fadeOut(300, function() {
		webcomicImage.attr("src", urlBase + requestedPage + ".jpg");
	}).fadeIn(300);
}

/** If we're at page 1 or at the last page, we will disable the previous/next-buttons */
function updateNavigationButtons(webcomicWrapper) {
	let webcomicImage = $(webcomicWrapper).find(".webcomic-page");
	let maxPage = parseInt(webcomicImage.attr("comic-pages"));
	let currentPage = webcomicImage.attr("comic-currentPage");

	//update placeholder-value of jump-to-input field
	webcomicWrapper.find(".jumpTo input").attr("placeholder", currentPage);

	if(currentPage == 1) {
		webcomicWrapper.find(".previous").addClass("disabled");
	}
	else if (currentPage == maxPage) {
		webcomicWrapper.find(".next").addClass("disabled");
	}
	else {
		//enable all buttons
		webcomicWrapper.find(".previous, .next").removeClass("disabled");
	}
}