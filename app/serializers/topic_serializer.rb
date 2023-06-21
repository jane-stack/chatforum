class TopicSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator

  def creator
    { 
      id: object.creator.id,
      username: object.creator.username,
    }
  end

  # def chats
  #   object.chats.map do |chat|
  #     { 
  #       id: chat.id,
  #       user: {
  #         id: chat.user.id,
  #         username: chat.user.username
  #       },
  #       content: chat.content
  #     }
  #   end
  # end

end
