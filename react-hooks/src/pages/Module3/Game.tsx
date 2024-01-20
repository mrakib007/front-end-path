import React from 'react';
import UserAvatar from './UserAvater';
import withBorder from './WithBorder';

const UserWithBorder = withBorder(UserAvatar);

const Game = () => {
    return (
        <div className="flex">
            <UserAvatar imageURL={"https://picsum.photos/200/300"}/>
            <UserWithBorder imageURL={"https://picsum.photos/200/300"}/>
            <UserAvatar imageURL={"https://picsum.photos/200/300"}/>
            <UserAvatar imageURL={"https://picsum.photos/200/300"}/>
        </div>
    );
};

export default Game;