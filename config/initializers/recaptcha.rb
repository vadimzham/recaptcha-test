Recaptcha.configure do |config|
  config.public_key  = ''
  config.private_key = ''
  # Uncomment the following line if you are using a proxy server:
  config.proxy = 'http://www.google.com/recaptcha/api/siteverify'
end
