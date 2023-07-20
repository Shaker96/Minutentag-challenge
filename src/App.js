
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Rating } from "./components/Rating";

import './App.css';

const products = [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 },
  { name: "Apples", votes: 0 },
]

const links = [
  'https://picsum.photos/id/237/200',
  'https://picsum.photos/id/188/200',
  'https://picsum.photos/id/165/200',
  'https://picsum.photos/id/5/200'
]

export default function App() {
  return (
    <div className="App">
      <div className="items-wrapper">
        <div className="item">
          <h3>Message</h3>
          <Message />
        </div>
        <div className="item">
          <h3>FocusableInput</h3>
          <FocusableInput focused={false} />
        </div>
        <div className="item">
          <h3>Rating</h3>
          <Rating />
        </div>
        <div className="item">
          <h3>PlayerStatus</h3>
          <PlayerStatus />
        </div>
        <div className="item item--gallery">
          <h3>ImageGallery</h3>
          <ImageGallery links={links} />
        </div>
        <div className="item">
          <h3>TeamsList</h3>
          <TeamsList />
        </div>
        <div className="item">
          <h3>Grocery</h3>
          <Grocery products={products} />
        </div>
        <div className="item item--list">
          <h3>ListItemForNavigation</h3>
          <ListItemsForNavigation />
        </div>
      </div>
    </div>
  );
}
