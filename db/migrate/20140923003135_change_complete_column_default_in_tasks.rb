class ChangeCompleteColumnDefaultInTasks < ActiveRecord::Migration
  def change
    change_column :tasks, :complete, :boolean, :default => false, :null => false
  end
end
