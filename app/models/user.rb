class User < ActiveRecord::Base
  has_many :tasks
  validates_presence_of :username, :password, :on => :create
end
