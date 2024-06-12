# Utiliser une image officielle Apache
FROM httpd:alpine

# Copier les fichiers HTML dans le répertoire par défaut de Apache
COPY ./app /usr/local/apache2/htdocs/

# Exposer le port 80 pour le trafic HTTP
EXPOSE 80