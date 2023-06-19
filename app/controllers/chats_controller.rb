class ChatsController < ApplicationController
    before_action :find_topic
    before_action :find_chat, only: [:update, :destroy]
    skip_before_action :authorize, only: [:index]
    before_action :unprocessable_entity_if_not_found, only: [:update, :destroy]
    before_action only: [:update, :destroy] do
        authorize_user_resource(@chat.user_id)
    end

    def index
        @topic = Topic.find(params[:topic_id])
        @chat = @post.chats
        render json: @chat
    end

    def create
        @chat = @topic.chats.create(chat_params)
        @chat.user = current_user
        if @chat.save
            render json: @chat, status: 201
        else
            render json: { errors: @chat.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @chat.update(chat_params)
        render json: @chat
    end

    def destroy
        @chat.destroy
        render json: { message: "Content Destroyed" }
    end

    private

    def chat_params
        params.permit(:content)
    end
    
    def find_topic
        @topic = Topic.find(params[:topic_id])
    end

    def find_chat
        @chat = Chat.find_by_id(params[:id])
    end

    def unprocessable_entity_if_not_found
        render json: { message: "Content not found" }, status: :unprocessable_entity unless @chat
    end

end
