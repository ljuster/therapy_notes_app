  class PatientsController < ApplicationController

  def create
    if Patient.create(patient_params)
      # flash[:success] = 'Rider has been created'
      head :ok
    else
      Rails.logger.info(patient.errors.full_messages)
      # flash[:alert] = patient.errors.full_messages
      render(partial: 'patients/form', locals: { patient: patient }, status: 422)
    end
  end

  def update
    return redirect_to patients_path(patient) if patient.update!(patient_params)

    redirect_to patients_path(patient), alert: "The patient could not be updated: #{patient.errors.full_messages}"
  end

  private

  def patient_params
    params.require(:patient).permit(:first_name,
                                    :last_name,
                                    :gender,
                                    :mobile_phone_number)
  end

  def patient
    @patient ||= load_patient
  end

  def patients
    @patients ||= load_patients
  end

  def load_patient
    patient.find_by_id_or_slug(params[:id])
  end

  def load_patients
    # if params[:q].present?
    #   patient.search_by_type(params[:q]).limit(100).page(params[:page])
    # elsif params[:state].present?
    #   patient.where(state: params[:state]).order(:created_at).page(params[:page])
    # elsif params[:ids].present?
    #   patient.find_by_ids_or_slugs(params[:ids])
    #     .includes([:account])
    # else
      patient.all.order(:created_at).page(params[:page])
    # end
  end
end
