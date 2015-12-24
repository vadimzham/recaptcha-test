class Question < ActiveRecord::Base
  validates :subject, :name, :message, presence: true
  validate :email_must_be_correct
  def email_must_be_correct
    errors.add(:email, "должен быть корректным") unless email =~ /\w+@\w+[.]\w+/
  end
end
