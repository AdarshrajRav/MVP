CREATE DATABASE pokegame;
\c pokegame;

CREATE TABLE score (
  id SERIAL UNIQUE,
  username varchar(60) NULL DEFAULT NULL,
  round INTEGER NOT NULL,
  PRIMARY KEY (id)
);