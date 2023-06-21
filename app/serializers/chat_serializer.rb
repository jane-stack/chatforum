class ChatSerializer < ActiveModel::Serializer
  attributes :id, :user, :content
end
