class QuestionsController < InheritedResources::Base

  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)

    respond_to do |format|
      if verify_recaptcha(model: @question, message: 'Error in passing CAPTCHA.') && @question.save
        format.js
      else
        format.js
      end
    end
  end

  private

    def question_params
      params.require(:question).permit(:subject, :name, :email, :message)
    end
end
