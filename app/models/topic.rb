class Topic < ApplicationRecord
    belongs_to :creator, class_name: "User", foreign_key: "user_id"
    has_many :chats, dependent: :destroy
    has_many :users, through: :chats

    validates :name :description, presence: true
end
