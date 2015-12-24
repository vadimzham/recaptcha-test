class LandingController < ApplicationController
  def index
    
  end

  def manuals
    @question = Question.new
    @manuals = Manual.all
  end
end
