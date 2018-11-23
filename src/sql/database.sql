CREATE DATABASE portal_noticias;

USE portal_noticias;

CREATE TABLE noticias(
    id_noticia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    noticia TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE noticias;

INSERT INTO noticias(titulo, noticia) VALUES('titulo1', 'contenido noticia');

SELECT * FROM noticias;