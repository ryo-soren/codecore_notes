class Api::V1::GiftsController < ApplicationController
    def create
        # generate a new gift => with a status of "pending"
        # if this gift can be saved into the db
        gift = Gift.new(amount: params[:amount])
        answer = Answer.find_by_id(params[:answer_id])
        gift.sender = current_user
        gift.receiver = answer.user
        gift.status = "pending"
    end
end
