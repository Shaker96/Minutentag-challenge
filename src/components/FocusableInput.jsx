/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

function Input(props, ref) {
  // Implement
  // Use the ref argument to forward the ref to the input element
  return <input ref={ref} {...props} />;
}

const TextInput = React.forwardRef(Input);

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focused = false }) {
	// Implement
  const inputRef = useRef(null);

  // Use useEffect to focus the input element when the focused prop changes
  useEffect(() => {
    // Check if the input element exists and is not already focused
    if (inputRef.current && !inputRef.current.contains(document.activeElement)) {
      // If true, call focus method on the input element
      inputRef.current.focus();
    }
  }, [focused]); // Only run when the focused prop changes

  // Render the TextInput component and pass the ref to it
  return <TextInput ref={inputRef} />;
}
