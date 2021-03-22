  class GroupsController < ApplicationController

    def index
      @groups = groups
    end

    def show
      redirect_to groups_path(group)
    end

    def create
      if group.create(group_params)
        # flash[:success] = 'Rider has been created'
        head :ok
      else
        Rails.logger.info(group.errors.full_messages)
        # flash[:alert] = group.errors.full_messages
        render(partial: 'groups/form', locals: { group: group }, status: 422)
      end
    end

  def update
    return redirect_to groups_path(group) if group.update!(group_params)

    redirect_to groups_path(group), alert: "The group could not be updated: #{group.errors.full_messages}"
  end

  private

  def group_params
    params.require(:group).permit(:name,
                                    :last_name,
                                    :gender,
                                    :mobile_phone_number)
  end

  def group
    @group ||= load_group
  end

  def groups
    @groups ||= load_groups
  end

  def load_group
    group.find_by_id_or_slug(params[:id])
  end

  def load_groups
    # if params[:q].present?
    #   group.search_by_type(params[:q]).limit(100).page(params[:page])
    # elsif params[:state].present?
    #   group.where(state: params[:state]).order(:created_at).page(params[:page])
    # elsif params[:ids].present?
    #   group.find_by_ids_or_slugs(params[:ids])
    #     .includes([:account])
    # else
    Group.all.order(:created_at).page(params[:page])
    # end
  end
end
