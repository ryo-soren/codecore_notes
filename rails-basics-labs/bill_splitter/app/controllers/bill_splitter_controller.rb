class BillSplitterController < ApplicationController
    def index
    end

    def bill_splitter
        @amount = params[:amount]
        @tax = params[:tax]
        @tip = params[:tip]
        @number_of_people = params[:number_of_people]

        @total = (((@amount.to_f * (1 + (@tax.to_f / 100))) * (1 + (@tip.to_f / 100)))/@number_of_people.to_f).round(2)
    end
end
