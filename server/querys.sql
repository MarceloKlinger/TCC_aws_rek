CREATE DATABASE bd_teste;
CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  filename TEXT,
  mimeType TEXT,
  bucket TEXT,
  contentType TEXT,
  location TEXT,
  etag TEXT
);
