DROP TABLE IF EXISTS jugadores_nba;


-- Crear una tabla para los jugadores
CREATE TABLE jugadores_nba (
    id serial PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    equipo VARCHAR(255),
    posicion VARCHAR(50),
    altura DECIMAL(4, 2),
    peso DECIMAL(4, 1),
    edad INT,
    nacionalidad VARCHAR(50),
    colegio VARCHAR(100),
    draft INT,
    puntos_por_partido DECIMAL(4, 1),
    rebotes_por_partido DECIMAL(4, 1),
    asistencias_por_partido DECIMAL(4, 1),
    eficiencia DECIMAL(4, 1)
);

-- Insertar datos de jugadores de la NBA con peso en kg y altura en metros
INSERT INTO jugadores_nba (nombre, equipo, posicion, altura, peso, edad, nacionalidad, colegio, draft, puntos_por_partido, rebotes_por_partido, asistencias_por_partido, eficiencia)
VALUES
    ('LeBron James', 'Los Angeles Lakers', 'Alero', 2.06, 113.4, 38, 'Estados Unidos', 'St. Vincent-St. Mary', 1, 27.2, 7.5, 7.3, 29.0),
    ('Kevin Durant', 'Brooklyn Nets', 'Ala-Pívot', 2.11, 108.9, 35, 'Estados Unidos', 'Texas', 2, 27.3, 7.1, 4.3, 27.4),
    ('Stephen Curry', 'Golden State Warriors', 'Base', 1.88, 83.9, 35, 'Estados Unidos', 'Davidson', 7, 24.6, 4.7, 6.5, 24.8),
    ('Giannis Antetokounmpo', 'Milwaukee Bucks', 'Ala-pívot', 2.11, 109.8, 28, 'Grecia', 'N/A', 15, 22.7, 9.6, 4.7, 27.0),
    ('Luka Dončić', 'Dallas Mavericks', 'Base', 2.01, 104.3, 24, 'Eslovenia', 'Real Madrid', 3, 27.6, 8.6, 	8.0, 28.8),
    ('Kawhi Leonard', 'Los Angeles Clippers', 'Alero', 2.01, 102.1, 32, 'Estados Unidos', 'San Diego State', 15, 19.6, 6.4, 3.0, 21.9),
    ('Joel Embiid', 'Philadelphia 76ers', 'Pívot', 2.13, 127.0, 29, 'Camerún', 'Kansas', 3, 27.2, 11.2, 3.4, 30.2),
    ('Damian Lillard', 'Portland Trail Blazers', 'Base', 1.88, 88.5, 33, 'Estados Unidos', 'Weber State', 6, 25.2, 4.2, 6.7, 23.4),
    ('Nikola Jokic', 'Denver Nuggets', 'Pívot', 2.13, 128.4, 28, 'Serbia', 'Mega Leks', 41, 20.2, 10.5, 6.6, 29.4),
    ('Anthony Davis', 'Los Angeles Lakers', 'Pívot', 2.08, 114.8, 30, 'Estados Unidos', 'Kentucky', 1, 24.0, 10.4, 2.4, 28.7);


SELECT * FROM jugadores_nba;