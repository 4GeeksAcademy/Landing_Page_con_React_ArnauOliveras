import React from "react";

import Card from "./card.jsx";

const Album = () => {
    return (
        <div class="album py-1 ">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 1"
                    description="This is the description for Card 1"
                    />
                    <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 2"
                    description="This is the description for Card 2"
                    />
                    <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 3"
                    description="This is the description for Card 3"
                    />
                    <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 4"
                    description="This is the description for Card 4"
                    />
                    <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 5"
                    description="This is the description for Card 5"
                    />
                    <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 6"
                    description="This is the description for Card 6"
                    />
                    <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5i2IQFjkKeXZG5O-LwwD7ekKuypZV6BfH4w&s"
                    title="Card 7"
                    description="This is the description for Card 7"
                    />
                </div>
            </div>
        </div>
    );
};

export default Album;