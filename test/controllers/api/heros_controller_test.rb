require 'test_helper'

class Api::HerosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_heros_index_url
    assert_response :success
  end

  test "should get update" do
    get api_heros_update_url
    assert_response :success
  end

end
