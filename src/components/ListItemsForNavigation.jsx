/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
  name: "Item",
});

export function ListItemsForNavigation() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Initialize the state with the first index
	const activeItemRef = useRef();

	useEffect(
		function () {
			// Focus the item using this effect
      if (activeItemRef.current) {
				activeItemRef.current.focus();
			}
		},
		[selectedIndex]
	);

	function handleKeyDown(event) {
		// Add the proper logic to calculate the index that correspond to the item that should be focused.
    event.preventDefault();
    const { key } = event;
		const length = itemsList.length;
		if (key === "ArrowUp" || key === "ArrowRight") {
			// Increment the index and wrap around if needed
			setSelectedIndex((selectedIndex + 1) % length);
		} else if (key === "ArrowDown" || key === "ArrowLeft") {
			// Decrement the index and wrap around if needed
			setSelectedIndex((selectedIndex - 1 + length) % length);
		}
	}

	return (
		<ul onKeyDown={handleKeyDown}>
			{itemsList.map((item, i) => (
				<li
					key={i}
					tabIndex={0} // Make the element focusable
					ref={i === selectedIndex ? activeItemRef : null} // Pass the reference to the selected item
				>
					{item.name} {i + 1}
				</li>
			))}
		</ul>
	);
}
