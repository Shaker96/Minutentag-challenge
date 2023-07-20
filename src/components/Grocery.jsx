/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import React, { useState } from "react";

function Product(props) {
	function handlePlus() {
		// logic to vote a product
    props.onVote(props.name, 1);
	}

	function handleMinus() {
		// logic to unvote a product
    props.onVote(props.name, -1);
	}

	return (
		<li>
      <div className="grocery-item">
        <span className="label">{props.name}</span>
        <span className="votes">
          <span className="label">votes: </span>
          <span className="value">{props.votes}</span>
          <button className="button button--small" onClick={handlePlus}>+</button>
          <button className="button button--small" onClick={handleMinus}>-</button>
        </span>
      </div>
		</li>
	);
}

export function Grocery({ products }) {
  const [votes, setVotes] = useState({});

  function onVote(name, value) {
		setVotes((prevVotes) => ({
			...prevVotes,
			[name]: (prevVotes[name] || 0) + value // increment or decrement the votes for the given product name
		}));
	}

	return (
		<ul className="grocery-list">
			{/* Render an array of products, which should call onVote when + or - is clicked */}
      {products.map((product) => (
				<Product
					key={product.name}
					name={product.name}
					votes={votes[product.name] || 0} // get the votes from the state or default to 0
					onVote={onVote} // pass the onVote function as a prop
				/>
			))}
		</ul>
	);
}
