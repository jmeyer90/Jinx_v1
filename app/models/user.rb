# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  zip_code        :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'securerandom'

class User < ApplicationRecord

  has_many :reviews, dependent: :destroy

  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :f_name, :l_name, :zip_code, presence: true
  validates :password, length:{minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials( email, password )
    user = User.find_by( email: email )
    return nil unless user && user.is_password?( password )
    user
  end

  def password=( password )
    @password = password
    self.password_digest = BCrypt::Password.create( password )
  end

  def is_password?( password )
    bcp = BCrypt::Password.new( self.password_digest )
    bcp.is_password?( password )
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end
end
