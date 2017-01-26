/**
 * Created by kohei on 17/01/25.
 */


import React from "react";
import ReactDom from "react-dom";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        // コンポーネントにカーソルが乗っているかの状態をもつ
        this.state = {
            hovered: false,
            count: 999,
            liked: false
        }
    }

    styles() {
        return {
            container: {
                fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
                fontSize: 11
            },
            like: {
                display: "inline-block",
                background: "#3b5998",
                padding: "0px 5px",
                borderRadius: 2,
                color: "#ffffff",
                cursor: "pointer",
                float: "left",
                height: 20,
                lineHeight: "20px"
            },
            likeHover: {
                background: "#444"
            },
            counterBefore: {
                display: "block",
                float: "left",
                width: 6,
                height: 6,
                background: "#fafafa",
                marginLeft: "-12px",
                borderRight: 10,
                transform: "rotate(45deg)",
                WebkitTransform: "rotate(45deg)",
                marginTop: 6,
                borderLeft: "1px solid #aaa",
                borderBottom: "1px solid #aaa"
            },
            counter: {
                display: "block",
                background: "#fafafa",
                boxSizing: "border-box",
                border: "1px solid #aaa",
                float: "left",
                padding: "0px 8px",
                borderRadius: 2,
                marginLeft: 8,
                height: 20,
                lineHeight: "20px"
            }
        };
    }

    onMouseEnter() {
        this.setState({hovered: true})
    }

    onMouseLeave() {
        this.setState({hovered: false})
    }

    onClick() {
        this.setState( {
            // すでに押されてたら解除して -1
            // 押されてなかったら押して +1
            count: this.state.count + (this.state.liked ? -1 : 1),
            liked: !this.state.liked
        });
    }

    getLikeStyle() {
        const styles = this.styles();
        // ES7
        // {...hoge, ...fuga} は hoge に fuga をマージした結果を返す
        return this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;
    }

    getLabel() {
        return this.state.liked ? "いいね！済み" : "いいね！";
    }

    render() {
        const styles = this.styles();
        return (
            <span style={styles.container}>
                <span
                    style={this.getLikeStyle()}
                    // ES7
                    // ::bar は bar.bind(this) のシンタックスシュガー
                    onMouseEnter={::this.onMouseEnter}
                    onMouseLeave={::this.onMouseLeave}
                    onClick={::this.onClick}>{this.getLabel()}</span>
                <span style={styles.counter}>
                    <span style={styles.counterBefore}>{" "}</span>{this.state.count}
                </span>
            </span>
        );
    }
}

ReactDom.render(
    <LikeButton/>,
    document.getElementById("like-button")
);

