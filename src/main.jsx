/**
 * Created by kohei on 17/01/25.
 */

import React from "react";
import ReactDom from "react-dom";

class LikeButton extends React.Component {
    render() {
        return (
            <span>いいねぼたん</span>
        );
    }
}

ReactDom.render(
    <LikeButton/>,
    document.getElementById("like-button")
);