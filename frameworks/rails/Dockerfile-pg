FROM joonee/rails:5.1.4

WORKDIR /app
COPY ./app /app
RUN bundle install
RUN rails g rspec:install
CMD ["rails","s","-b","0.0.0.0"]
