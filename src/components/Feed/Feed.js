import React from 'react';
import FavArtist from "./FavArtist";

function Feed() {

  return (
    <div className="flex flex-col">
        <p>Your favourite Artists</p>
        <FavArtist />
    </div>
    
  );
}

export default Feed