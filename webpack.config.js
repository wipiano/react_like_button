module.exports = {
    entry: __dirname + "/src/main.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "like-button.js"
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: "babel"}
        ]
    }
};