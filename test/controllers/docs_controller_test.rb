require 'test_helper'
require 'capybara/rails'
require 'capybara/rspec'

class DocsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
 #
  #I'm not sure how to test the contents of the .md. 
  #I could write a test todo this with capybara though.
  test "readme is successful" do
    get :readme
    assert_response :success
  end

  test "readme redirects to correct route" do
    get :readme
    assert_redirected_to readme_path
  end

end

describe "correct link leads to readme", :type => :feature do
  it "leads to the correct page" do
    visit '/'
    click_link 'the 'Section E' Markdown Document (./section_E.md)'
    expect(page).to have_content 'Task List Instructions'
  end
end