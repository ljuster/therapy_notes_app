class HomepageController < ApplicationController
  def index
    @groups = Group.active.all
  end
end
