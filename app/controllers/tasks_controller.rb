class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  # GET /tasks.json
  def index
    @task = Task.new

    if params.key?('q')
      @archived = nil
      query_string = "%#{params['q']}%"

      @tasks = Task.where(
        Task.arel_table[:title].matches(query_string).or(
          Task.arel_table[:description].matches(query_string)
        )
      )
    else
      @tasks = Task.all

      @archived = params.key?('archived') && params['archived'] == 'true'
      @tasks.where!(archived: true) if @archived
      @tasks = @tasks.unarchived unless @archived
    end
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_path, notice: 'Task was successfully created.' }
        format.json { render action: 'show', status: :created, location: @task }
      else
        format.html { render action: 'new' }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    #My solution doesn't mesh well with the code below, I'm
    #not totally famaliar with the syntax in lines 64-72 below. Ideally,
    #I'd sent the notices and errors back through ajax to populate in the view
    #rather than use the Rails methods.
    @task = Task.find(params[:id])
    if params[:method] == "complete"
      if @task.complete 
        @task.update_attribute(:complete, false)
      else
        @task.update_attribute(:complete, true)
      end
    elsif params[:method] == "archive"
      if @task.archived
        @task.update_attribute(:archived, false)
      else    
        @task.update_attribute(:archived, true)
      end
    else
      # respond_to do |format|
      #   if @task.update(task_params)
      #     format.html { redirect_to tasks_path, notice: 'Task was successfully updated.' }
      #     format.json { head :no_content }
      #   else
      #     format.html { render action: 'edit' }
      #     format.json { render json: @task.errors, status: :unprocessable_entity }
      #   end
      # end
    end
    render json: {archived: @task.archived, complete: @task.complete}
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.require(:task).permit(:title, :description, :complete, :archived, :tags)
    end
end
