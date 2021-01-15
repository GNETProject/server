"use strict";

module.exports = class Web {
    constructor(config) {
        this.config = config;

        const express = require('express')
        const app = express()

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.get('/thread', (req, res) => {
            var threadId = req.query.id || "home";
            if (threadId === "home") {
                res.redirect(config.config.domain + "/")
            }
        });

        if (config.config.admin.enabled) {
            app.get('/admin-dashboard', (req, res) => { res.json({ "status": 200 }) });
        }


        app.listen(config.config.port, () => {
            console.log(`Web-Module enabled. Port: [${config.config.port}]`)
        });
    }
};