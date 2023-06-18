class User < ApplicationRecord
    has_many :topics
    has_many :chatrooms, through: :topics

    validates :username, uniqueness: true, presence: true
    validates :password, length: { minimum: 8 }
end
