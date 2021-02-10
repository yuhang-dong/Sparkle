import http from 'http';
import express from 'express';


const server = http.createServer(express().use('/*', (req, res) => {

}));


server.listen(3500, () => {
    console.log("success")
})
