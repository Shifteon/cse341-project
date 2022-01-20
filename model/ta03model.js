const { response } = require('express');
const fetch = require('node-fetch');

module.exports = class Product {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    static fetchAll(cb) {
        const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                cb(data);
            });
    }

    static search(query, cb) {
        const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredData = [];
                for (let product of data) {
                    if (product.tags.includes(query)) {
                        filteredData.push(product);
                    }
                }
                cb(filteredData);
            });
    }
};