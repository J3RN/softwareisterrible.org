require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/post/:postid' do
  # erb
end

get '/signup' do
  erb :signup
end

post '/newaccount' do
end