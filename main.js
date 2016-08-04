var hello_server = require('hello_server');

hello_server.app.get('/testing', function(request, response) {
    response.send("Testing");
});

hello_server.app.get('/:header_name', function(request, response) {
    var headerName = request.params.header_name;
    var headerPath = request.headers[headerName];
    response.json(headerPath);
});

hello_server.app.listen(process.env.PORT, process.env.IP);
