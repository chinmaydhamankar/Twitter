/**
 * Created by Chinmay on 21-03-2016.
 */

var request = require('request')
    , express = require('express')
    ,assert = require("assert")
    ,http = require("http");

describe('http tests', function(){

    it('should return the login if the url is correct', function(done){
        http.get('http://localhost:3000/', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });

    it('should not return the home page if the url is wrong', function(done){
        http.get('http://localhost:3000/homeinvalidrequest', function(res) {
            assert.equal(404, res.statusCode);
            done();
        })
    });

    it('should login', function(done) {
        request.post(
            'http://localhost:3000/homePageAfterLogin',
            { form: { username: 'Chinmay',password:'chinmayd' } },
            function (error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            }
        );
    });

    it('should register', function(done) {
        request.post(
            'http://localhost:3000/signUp',
            { form: { first_name: 'Joey',last_name:'Anderson',email:'joey@gmail.com',password:'password',userhandle:'joey@Twitter'}},
            function (error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            }
        );
    });

    it('should fetch tweets', function(done) {
        request.post(
            'http://localhost:3000/fetchtweets',
            { form: { username:'chinmay'}},
            function (error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            }
        );
    });
});