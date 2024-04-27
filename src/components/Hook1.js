
import React from 'react';
import { useState } from 'react';
function FavoriteColor() {
    const [color, setColor] = useState("Orange");
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
        <button type="button" onClick={() => setColor("red")}>Red</button>
        <button type="button" onClick={() => setColor("pink")}>Pink</button>
        <button type="button" onClick={() => setColor("green")}>Green</button>
        <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        <button type="button" onClick={() => setColor("skyblue")}>Skyblue</button>
      </>
    );
}
export default FavoriteColor;