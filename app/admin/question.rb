ActiveAdmin.register Question do

  permit_params :subject, :name, :email, :message
  actions :index, :show, :destroy


end
