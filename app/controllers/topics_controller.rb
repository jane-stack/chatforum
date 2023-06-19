class TopicsController < ApplicationController
    before_action :find_topic, only: [:update, :destroy]
    skip_before_action :authorize, only: [:index]
    before_action :unprocessable_entity_if_not_found, only: [:updata, :destroy]
    before_action only: [:update, :destroy] do
        authorize_user_resource(@topic.user_id)
    end

    def index
        if params[:user_id]
            user = User.find_by_id(params[:user_id])
            @topic = user.topics
        else
            @topic = Topic.all
        end
        render json: @topic
    end

    def create
        topic = current_user.topics.create(topic_params)
        if topic.valid?
            render json: topic
        else
            render json: { errors: topic.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @topic.update(topic_params)
        render json: @topic, include: [:creator]
    end

    def destroy
        @topic.destroy
        render json: { message: "Successfully Deleted" }
    end

    private

    def topic_params
        params.permit(:name, :description)
    end

    def find_topic
        @topic = Topic.find_by_id(params[:id])
    end

    def unprocessable_entity_if_not_found
        render json: { message: "Topic not found" }, status: :unprocessable_entity unless @topic
    end

end
