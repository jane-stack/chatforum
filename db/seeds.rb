# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Topic.destroy_all

# Users
jane = User.create(username: "janeur", password: "Test1234#")
jimmy = User.create(username: "jvng", password: "Test1234#")

# Topic
topic1 = Topic.create(name: "Ruby on Rails", description: "What are your thoughts regarding Ruby on Rails?", creator: jane)
topic2 = Topic.create(name: "Colorado Lakes", description: "Does Colordo have any natrual lakes?", creator: jimmy)