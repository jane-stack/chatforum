class Topic < ApplicationRecord
    belongs_to :creator, class_name: "User", foreign_key: "user_id"
    has_many :chatrooms, dependent: :destroy
    has_many :users, through: :chatrooms

    validates :name, presence: true
end
