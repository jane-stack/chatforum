class TopicSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :creator

  def creator
    { id: object.creator.id, usernmae: object.creator.username }
  end

end
