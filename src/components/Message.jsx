/*
 * The Message component contains an anchor element and
 * a paragraph below the anchor. Rendering of the paragraph
 * should be toggled by clicking on the anchor element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */

import { useState } from "react";

export function Message() {
  const [renderParagraph, setRenderParagraph] = useState(false);

  function handleClick() {
    setRenderParagraph(!renderParagraph);
  }

	return (
		<div>
			<a href="#" onClick={handleClick}>Want to buy a new car?</a>
			{renderParagraph && <p>Call +11 22 33 44 now!</p>}
		</div>
	);
}
