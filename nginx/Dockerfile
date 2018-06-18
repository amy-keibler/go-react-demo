FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
ADD ./ /etc/nginx/conf.d
ADD ./go-react/static /static
