var fs = require('fs');

// This is a synchronous file read.
var greet1 = fs.readFileSync(`${__dirname}/greeting.txt`, 'utf8');
console.log(greet1);

// This is an asynchronous file read - which is why we see
// 'All Done.' logged prior to the contents of greeting.txt
var greet2 = fs.readFile(`${__dirname}/greeting.txt`, 'utf8', function(err, data) {
    console.log(data);
});

console.log('All Done.');

// TL;DR - Obviously asynchronous operatons should
// be used whenever possible. HOWEVER...
/*
    Memory management is incredibly important. Our file above only has
    a short string. But if we were reading text from a novel (for instnace),
    then we'd be pounding our system - especially when multiple users
    are accessing the same novel file.

    This is where "streams" come in. The perfect example in the real world
    is how you stream a movie. You don't wait to watch the entire movie
    until it has been downloaded. You stream it. The conept is the same in
    Node. Instead of having a massive buffer that takes up all of our memory,
    we break buffer "chunks" that get sent out in a "stream". This way, our
    buffer remains small and memory untilization remains low.
*/

var novel = fs.createReadStream(`${__dirname}/novel.txt`, {
    encoding: 'utf8', // define the file's encoding (utf8 is the default)
    highWaterMark: 16 * 1024 // override the default "chunk size" (16 * 1024 bytes = 16kb)
});

novel.on('data', function(chunk) {
    // console.log(chunk) // log the novel copy in the stream chunk
    console.log(`${chunk.length} bytes`); // log how many bytes of data are in the streamed chunk
});

// CLARIFICATION
/*
    So just to nail this concept in to the ground, the difference between
    the first example vs the "stream" example is that when using a stream,
    we did not require our system to read the entire file at once. Therefore
    we gain a ton of efficiency (better memory mgmt) b/c we can are reading
    the file in "chunks".
*/