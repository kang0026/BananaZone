require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest

  test "invalid signup information" do
    get new_user_path
    assert_no_difference 'User.count' do
      post users_path, user: { name:  "",
                                         email: "user@invalid",
                                         password: "foo",
                                         password_confirmation: "bar" }   #rails 5 params is not implicit, need params: {users: ....}
    end
    assert_template 'users/new'
  end


  test "valid signup information" do
    get new_user_path
    assert_difference 'User.count', 1 do
      post users_path, user: { name:  "Example User",
                                         email: "user@example.com",
                                         password:              "password",
                                         password_confirmation: "password" } 
    end
    follow_redirect!
    assert_template 'users/show'
  end
end