class ChatsController < ApplicationController
    before_action :find_topic
    skip_before_action :authorize, only: [:index]

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
            render json: { errors: @chats.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update

    end

    private

    def chat_params
        params.permit(:content)
    end
    
    def find_topic
        @topic = Topic.find(params[:topic_id])
    end

end
