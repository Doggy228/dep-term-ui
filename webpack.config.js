var path = require('path');

module.exports = {
    mode: "none",
    entry: {
        "ui": "./src/ui/index.jsx",
    },
    output:{
        path: path.resolve(__dirname, './'),     // путь к каталогу выходных файлов - папка ui
        publicPath: '/',
        filename: "[name]/bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react", {
                        'plugins': ['@babel/plugin-proposal-class-properties']}]    // используемые плагины
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
