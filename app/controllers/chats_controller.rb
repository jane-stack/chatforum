class ChatsController < ApplicationController
    before_action :find_topic
    skip_before_action :authorize, only: [:index]

    def index
        @topic = Topic.find(params[:topic_id])
        @chat = @topic.chats
        render json: @chat
    end

    # POST /topics/:id/chats
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
        @chat = @topic.chats.find(params[:id])
        @chat.update(chat_params)
        render json: @chat
    end

    # DESTROY /topics/:id/chats/:id
    def destroy
        @chat = @topic.chats.find(params[:id])
        @chat.destroy
        render json: @chat
    end

    private

    def chat_params
        params.permit(:content)
    end
    
    def find_topic
        @topic = Topic.find(params[:topic_id])
    end

end
