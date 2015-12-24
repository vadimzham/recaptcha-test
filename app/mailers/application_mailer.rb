class ApplicationMailer < ActionMailer::Base
  default from: 'noreply@meccanosoft.com'
  default to: 'help-crm@meccanosoft.com'
  layout 'mailer'
end
