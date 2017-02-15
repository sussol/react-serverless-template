-- Used to drop tables from testing setup and reinstantiate them.

DROP TABLE myTable;

CREATE TABLE myTable (
  id VARCHAR(36) PRIMARY KEY,
  code VARCHAR(64) NOT NULL,
  name VARCHAR(128) NOT NULL
);
