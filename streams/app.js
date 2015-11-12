/*
    Note, I breifly touched on streams in the "file-system"
    demo. This is a deeper look at them, along with how to
    "pipe" streams.

    Lastly, in these examples I am using the file-system.
    But streams apply to much more than just the file system,
    we can stream content to a web page or in and out of a
    database, etc.
*/

var fs = require('fs'),
    zlib = require('zlib'); // Node's library for gzipping files

// create "readable" stream to connect to novel.txt
var readable = fs.createReadStream(`${__dirname}/novel.txt`);

// create "writeable" stream to connect to novel-copy.txt
var writeable = fs.createWriteStream(`${__dirname}/novel-copy.txt`);

// create "writeable" steam to send the compressed stream to novel.txt.gz
var compressed = fs.createWriteStream(`${__dirname}/novel.txt.gz`);

// create a compressed stream (this is the one that does the
// actual compressing).
var gzip = zlib.createGzip();

// as the contents of novel.txt are read in "chunks", write them
// to novel-coppy.txt (in chunks)
readable.pipe(writeable);

// as the contents of novel.txt are read in "chunks", compress the
// chunks, then write the compressed chunks to novel.txt.gz (in chunks)
readable.pipe(gzip).pipe(compressed);