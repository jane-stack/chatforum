class Topic < ApplicationRecord
    has_many :chatrooms, dependent: :destroy
    has_many :users, through: :chatrooms

    validates :name, presence: true
end
