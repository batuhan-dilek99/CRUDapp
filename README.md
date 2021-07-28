# CRUDapp
## Running the project 
type : 
```
yarn start
```
to start the project

## Database tables
creating tables
```
CREATE TABLE public.game
(
    gameid integer NOT NULL,
    gamename "char"[] NOT NULL,
    gamegenre "char"[] NOT NULL,
    CONSTRAINT game_pkey PRIMARY KEY (gameid, gamename, gamegenre)
)

TABLESPACE pg_default;

ALTER TABLE public.game
    OWNER to postgres;
```
## .env
```
PG_USERNAME = admin
PG_PASSWORD = DavyJones99
POSTGRES_DB = postgres
PG_HOST = 127.0.0.1
PG_PORT = 5050
APP_PORT = 3000
```



