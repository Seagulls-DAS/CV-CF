# Utilise une image Nginx pour servir les fichiers statiques
FROM nginx:latest

# Copie tous les fichiers et dossiers du répertoire public dans le répertoire où Nginx cherche les fichiers
COPY ./public /usr/share/nginx/html

# Expose le port 80 pour accéder à l'application
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
