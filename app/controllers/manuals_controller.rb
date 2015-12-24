class ManualsController < InheritedResources::Base

  private

    def manual_params
      params.require(:manual).permit()
    end
end

