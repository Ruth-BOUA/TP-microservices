Nous avons fait 3 microservices. Un pour gérer un catalogue de films, un autre pour gérer les utilisateurs et un dernier pour gérer l'authentification. Nous n'avons pas su comment terminer ce dernier.
Les 3 microservices sont déployables sur Docker mais accessibles uniquement via la console et une commande "curl".

Par exemple avec film-service :

Aller dans le dossier et faire :
npm start

Ensuite pour récupérer le catalogue des films :
http://127.0.0.1:8000/catalog


Pour faire marcher, il suffit de construire l'image Docker : 
docker build -t nomImage .

Puis lancer l'image (de préférence choisir le port 8000) et via la console : 
curl http://0.0.0.0:8000/catalog